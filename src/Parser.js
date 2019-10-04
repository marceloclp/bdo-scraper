const Util    = require(`./util`)
const Keyword = require(`./keywords`)
const cheerio = require('cheerio')
const { TabsController } = require('./controller')

class Parser {
    constructor($, lang, id) {
        this.$  = $
        this.l  = lang
        this.id = id
    }

    getName($ = this.$) {
        return Util.trim($('.item_title').text())
    }

    getGrade($ = this.$) {
        return parseInt(Util.sliceOnSubstr(
            $('.item_title').attr('class'), 'item_grade_'
        ))
    }

    getIcon($ = this.$) {
        return $('.item_icon[alt=icon]').attr('src')
    }

    getType($ = this.$) {
        return Util.trim($('.category_text').text())
    }

    getWeight($ = this.$, l = this.l) {
        const children = this.findCategoryNode()
        for (let i = children.length - 1; i >= 0; i--) {
            const { data } = children[i]
            const payload = Keyword.slice(l, data, 'general/WEIGHT')
            if (payload)
                return Util.trim(payload)
        }
    }

    getLifespan($ = this.$, l = this.l) {
        const children = this.findCategoryNode()
        for (let i = children.length - 1; i >= 0; i--) {
            const { data } = children[i]
            const payload = Keyword.slice(l, data, 'general/LIFESPAN')
            if (payload)
                return Util.trim(payload) || null
        }
    }

    getDurability($ = this.$) {
        return parseInt($('#durability').text().split(' / ')[1])
    }

    getDescription($ = this.$, l = this.l) {
        const key      = 'description/DESCRIPTION'
        const children = this.findTableRow(key)
        if (!children) return

        for (let i = 0; i < children.length; i++) {
            const text = $(children[i]).text()
            // This wont't always return the correct answer, but there are too
            // many cases to consider, so for now the node at keywordIdx+2 will
            // be considered a valid description.
            if (Keyword.indexOf(l, text, key) > -1)
                return Util.trim($(children[i+2]).text())
        }
    }

    getConsumableEffects($ = this.$, l = this.l) {
        const key      = 'description/EFFECT'
        const children = this.findTableRow(key)
        if (!children) return []

        for (let i = 0; i < children.length; i++) {
            if (Keyword.indexOf(l, children[i].data, key) < 0)
                continue
            // The consumable effects are listed inside a <span> element, but
            // its index varies, so find index `i`.
            while (true)
                if (children[++i].name === 'span')
                    break
            return $(children[i]).contents().toArray().map(
                node => Util.trim(node.data)
            ).filter(e => e)
        }
        return []
    }

    getEquipmentEffects($ = this.$, l = this.l) {
        const children = $('#description').contents().toArray()
        if (!children.length) return {}

        const mapKeyToName = (str) => {
            const key = [
                'effects/ITEM',
                'effects/2_SET',
                'effects/3_SET',
                'effects/4_SET',
                'effects/FULL_SET',
                'effects/EXTRA',
                'effects/ENHANC',
            ].find(key => Keyword.indexOf(l, str, key) > -1)
            return key ? key.split('/')[1].toLowerCase() : key
        }

        const payload = {}
        let curKey
        for (let i = 0; i < children.length; i++) {
            const { name, data } = children[i]

            if (data) {
                const newKey = mapKeyToName(data)
                if (newKey && newKey !== curKey) {
                    curKey = newKey
                    payload[curKey] = []
                }
            } else if (name !== `br`) {
                const text = $(children[i]).text()
                payload[curKey].push(Util.trim(text))
            }
        }

        return payload
    }

    getDuration($ = this.$, l = this.l) {
        const key      = `description/DURATION`
        const children = this.findTableRow(key)
        if (!children) return null

        for (let i = 0; i < children.length; i++) {
            const { data } = children[i]
            if (Keyword.indexOf(l, data, key) > -1)
                return Util.trim($(children[i+1]).text(), '.')
        }
        return null
    }

    getCooldown($ = this.$, l = this.l) {
        const key      = 'description/COOLDOWN'
        const children = this.findTableRow(key)
        if (!children) return null

        for (let i = 0; i < children.length; i++) {
            const { data } = children[i]
            if (Keyword.indexOf(l, data, key) > -1)
                return Util.trim($(children[i+1]).text(), '.')
        }
        return null
    }

    getExclusive($ = this.$, l = this.l) {
        const key      = 'description/EXCLUSIVE'
        const children = this.findTableRow(key)
        if (!children) return
        
        for (let i = 0; i < children.length; i++) {
            const { data } = children[i]
            const payload  = Keyword.slice(l, data, key)
            if (payload)
                return payload.split(`,`).map(e => Util.trim(e))
        }
    }

    getPersonalTransaction($ = this.$, l = this.l) {
        const key      = 'general/P_TRANSACTION'
        const children = this.findTableRow(key)
        if (!children) return

        const falseKey = 'general/P_TRANSACTION/FALSE'
        for (let i = 0; i < children.length; i++) {
            const { data } = children[i]
            if (Keyword.indexOf(l, data, key) > -1)
                return Keyword.indexOf(l, data, falseKey) < 0
        }
    }

    getPrices($ = this.$, l = this.l) {
        const keys = {
            buy:    'prices/BUY',
            sell:   'prices/SELL',
            repair: 'prices/REPAIR'
        }
        const children = this.findTableRow(keys.buy)
        const payload  = { buy: null, sell: null, repair: null }
        if (!children) return payload

        for (let i = 0; i < children.length; i++) {
            if (!Object.keys(keys).length)
                break
            const { data } = children[i]
            Object.keys(keys).find(key => {
                payload[key] = Keyword.slice(l, data, keys[key])
                if (payload[key]) delete keys[key]
            })
        }

        return payload
    }

    getStats($ = this.$) {
        if (!$('#damage').length)
            return undefined
        return {
            damage:     Util.trim($('#damage').text())     || '0',
            defense:    Util.trim($('#defense').text())    || '0',
            accuracy:   Util.trim($('#accuracy').text())   || '0',
            evasion:    Util.trim($('#evasion').text())    || '0',
            dreduction: Util.trim($('#dreduction').text()) || '0',
        }
    }

    getSkillLvl($ = this.$, l = this.l) {
        const key      = 'cooking/SKILL_LVL'
        const children = this.findTableRow(key)
        if (!children) return

        for (let i = 0; i < children.length; i++) {
            const text    = $(children[i]).text()
            const payload = Keyword.slice(l, text, key)
            if (payload)
                return Util.trim(payload)
        }
    }

    getRecipeType($ = this.$) {
        return Util.trim($('.category_text')
            .parent().find('.yellow_text').text())
    }

    getCraftingMaterials() {
        return this.getRecipeMaterials('cooking/MATERIALS')
    }

    getCraftingResults() {
        return this.getRecipeMaterials('cooking/RESULT')
    }

    /**
     * Helper function.
     * Parses the materials list from a Recipe page.
     * 
     * @param {string} key The keyword name to find the correct table row.
     * @returns an array of objects describing the materials.
     */
    getRecipeMaterials(key, $ = this.$) {
        const children = this.findTableRow(key)
        if (!children) return []

        let payload = []
        for (let i = 0; i < children.length; i++) {
            const { name } = children[i]
            const node     = $(children[i])
            switch (name) {
                case 'div':
                    payload.push({
                        amount: parseInt(node.text()) || 1,
                        icon: Util.trim(node.find('img').attr('src'))
                    })
                    break
                case 'a':
                    const obj = payload[payload.length - 1]
                    obj.link = node.attr('href')
                    obj.name = node.text()
                    obj.id   = parseInt(obj.link.replace(/\D/g,''))
                    break
            }
        }

        return payload
    }

    /**
     * Helper function.
     * Parsers the query response and builds the recipe list.
     * 
     * @param {object} data The response from the query request.
     */
    static parseRecipeList(data) {
        return data.map(r => {
            const [ materials, results ] = [r[6], r[7]].map(str => {
                const $     = cheerio.load(str)
                const divs  = $('div').children().toArray()
                const links = $('a').toArray()

                return divs.map((node, i) => {
                    const href = $(links[i]).attr('href')
                    const text = $(divs[i]).text()
                    return {
                        link:   href,
                        icon:   Util.substrBetween(text, 'src="', '"'),
                        amount: parseInt(Util.substrBetween(text, ']')) || 1,
                        id:     parseInt(href.replace(/\D/g,''))
                    }
                })
            })

            return {
                id:        parseInt(r[0]),
                icon:      Util.substrBetween(r[1], '[img src="', '"'),
                name:      Util.substrBetween(r[2], '<b>', '</b>'),
                skill_lvl: r[3].display,
                exp:       parseInt(r[4]) || 0,
                type:      r[5],
                materials, results
            }
        })
    }

    /**
     * Helper function.
     * Finds the entity query uris to retrieve recipes and additional data.
     * 
     * @returns Array of objects describing the URI to request.
     */
    parseQueryObjs($ = this.$, l = this.l, id = this.id) {
        const mapTabToKey = {
            '#tabs-productofrecipe':  'recipes',
            '#tabs-recipematerial':   'used_in_recipe',
            '#tabs-mproductofrecipe': 'recipes',
            '#tabs-designmaterial':   'used_in_design',
        }
        const tabs = Object.keys(mapTabToKey)
        const Ctrl = new TabsController(id, l)
        return $('.nav.nav-tabs').find('a').toArray().map((node, i) => {
            const href = $(node).attr('href')
            if (!tabs.includes(href))
                return null
            return {
                uri: Ctrl.get(href),
                key: mapTabToKey[href]
            }
        }).filter(e => e)
    }

    /**
     * Helper function.
     * Get table row content nodes from a keyword `key`.
     * 
     * @param {string} key  Keyword key to use to search for the correct row.
     * @returns array of content nodes if available, `null` otherwise.
     */
    findTableRow(key, $ = this.$, l = this.l) {
        // Find the table row that contains a substring on the text body.
        const nodes = $(`.smallertext.hundredProz> tbody`).children().toArray()
        for (let i = 0; i < nodes.length; i++) {
            const node = $(nodes[i])
            // Ignore <script> nodes.
            if (nodes[i].type === 'script')
                continue
            if (Keyword.indexOf(l, node.text(), key) > -1)
                return node.children().contents().toArray()
        }
        return null
    }

    /**
     * Helper function.
     * Returns the `.category_text` parent node contents.
     */
    findCategoryNode($ = this.$) {
        return $('.category_text').parent().contents().toArray()
    }

}

module.exports = Parser
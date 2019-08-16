const rp      = require('request-promise')
const cheerio = require('cheerio')
const slicers = require('./slicers.json')

class BDOScraper {
    constructor($, uri) {
        this.$        = $
        this._uri     = uri
        this._id      = uri.replace(/\D/g,'')
        this._locale  = Object.keys(slicers).find(l => uri.split('/')[3].indexOf(l) !== -1)
        this._slicers = slicers[this._locale]
    }

    /**
     * Helper function to get a single node value from contents based on a slicer.
     * 
     * @param {string}  slicer  The slicer to be used.
     * @param {nodes[]} wrapper The array of nodes to be searched.
     */
    static getFromWrapperArr($, slicer, wrapper) {
        for (let i = 0; i < wrapper.length; i++) {
            const text = $(wrapper[i]).text()

            if (text && text.indexOf(slicer) !== -1) {
                return _trim(text.slice(slicer.length))
            }
        }
        return null
    }

    /**
     * Returns the name of the item if it exists.
     */
    getName() {
        return _trim(this.$('.item_title').text()) || null
    }

    /**
     * Returns the alternate name of the item if it exists.
     * Only available in BDOCodex.com.
     */
    getAltName() {
        return _trim(this.$('.item_sub_title').text()) || null
    }

    /**
     * Returns the grade of the item if it exists.
     */
    getGrade() {
        const slicer = 'item_grade_'
        const cx     = this.$('.item_title').attr('class')

        return cx.slice(
            cx.indexOf(slicer) + slicer.length
        ) || null
    }

    /**
     * Returns the src for the item icon's image if it exists.
     * It still needs to be parsed with the correct database base url.
     */
    getIcon() {
        if (!this._src)
            this._src = this.$('.item_icon[alt=icon]').attr('src') || null
        return this._src
    }

    /**
     * Returns an object containing the stats for an equipment if it exists,
     * otherwise returns null.
     */
    getStats() {
        if (!this.$('#damage').text())
            return null

        return {
            damage:     _trim(this.$('#damage').text()),
            defense:    _trim(this.$('#defense').text()),
            accuracy:   _trim(this.$('#accuracy').text()),
            evasion:    _trim(this.$('#evasion').text()),
            dreduction: _trim(this.$('#dreduction').text()),
        }
    }

    /**
     * Returns the weight of the item if it exists.
     */
    getWeight() {
        return BDOScraper.getFromWrapperArr(
            this.$,
            this._slicers.WEIGHT,
            this.$('.category_text').parent().contents().toArray()
        )
    }

    /**
     * Returns the item type displayed ingame if it exists.
     */
    getType() {
        return _trim(this.$('.category_text').text()) || null
    }

    /**
     * Uses the item's icon url to build a more detailed item type.
     * Returns an array containing the most general type to the most specific type.
     * 
     * Example: ['etc','productmaterial']
     */
    getDetailedType() {
        if (!this._src) this.getIcon()

        let src      = this._src
        const slicer = 'new_icon/'

        // If the src doesn't have this substr, it is not yet
        // supported building the detailed type.
        if (src.indexOf(slicer) === -1)
            return null

        src = src.slice(
            src.indexOf(slicer) + slicer.length,
            src.lastIndexOf('/')
        )

        return src.split('/')
    }

    /**
     * Returns an object containing the buy, sell and repair prices if it exists.
     */
    getPrices() {
        const contents = this.$('table.smallertext > tbody > tr')
            .last().children().first().contents()

        const setPrice = (key, slicer, str) => {
            if (prices[key])
                return
    
            const idx = str.indexOf(slicer)
    
            if (idx === -1)
                return
    
            prices[key] = str.slice(
                str.indexOf(slicer) + slicer.length
            )
        }
    
        let prices = { buy: null, sell: null, repair: null }
    
        contents.each((i, elem) => {
            if (!elem.data)
                return
    
            setPrice('buy',    this._slicers.BUY,    elem.data)
            setPrice('sell',   this._slicers.SELL,   elem.data)
            setPrice('repair', this._slicers.REPAIR, elem.data)
        })
    
        return prices
    }

    /**
     * Returns an array containing the item effects if it exists.
     */
    getItemEffects() {
        const contents = this.$('#edescription').contents()
        let effects    = []
        let append     = false
    
        contents.each((i, elem) => {
            if (elem.type === 'text') {
                if (!append & elem.data.indexOf(this._slicers.EFFECT) !== -1)
                    append = true
                else if (append && _trim(elem.data))
                    append = false
                return
            }
    
            if (append) {
                const str = this.$(elem).text()
                if (str)
                    effects.push(_trim(str))
            }
        })
    
        return effects
    }

    /**
     * Returns an array containing the enhancement effects if it exists.
     */
    getEnhancementEffects() {
        const contents = this.$('#edescription').contents()
        let effects    = []
        let append     = false

        contents.each((i, elem) => {
            if (elem.type === 'text') {
                if (!append & elem.data.indexOf(this._slicers.ENHANCEMENT) !== -1)
                    append = true
                else if (append && _trim(elem.data))
                    append = false
                return
            }

            if (append) {
                const str = this.$(elem).text()
                if (str)
                    effects.push(_trim(str))
            }
        })

        return effects
    }

    /**
     * Returns the description of the item if it exists.
     */
    getDescription() {
        const contentsArr = this.$('table.smallertext > tbody > tr')
            .last().children().first().contents().toArray()

        let description = ''
        let append      = false
        let lineBreaks  = 0

        for (let i = 0; i < contentsArr.length; i++) {
            const node = contentsArr[i]
            const elem = this.$(node)
            const text = elem.text()

            if (text.indexOf(this._slicers.DESCRIPTION) !== -1) {
                // The start of the description block.
                append = true
                continue
            }

            if (append) {
                if (elem.attr('style') === 'color: #e9bd23') {
                    // Yellow text, end of description text block.
                    break
                }

                if (['-', '-'].includes(text[0])) {
                    // Start of a new text block that wasn't separated by
                    // double line break or the start of yellow text.
                    break
                }

                if (node.type === 'tag' && node.name === 'br') {
                    // Checks for double line break.
                    if (++lineBreaks === 2)
                        break
                } else lineBreaks = 0

                if (text)
                    description += _trim(text) + '\n'
            }
        }

        return description ? _trim(description) : null
    }

    /**
     * Returns a promise with objects[] containing the materials and results of all
     * recipes that result on this item.
     */
    getRecipesFromItem() {
        return new Promise(res => {
            const uri = `https://bdocodex.com/query.php?a=recipes&type=product&item_id=${this._id}&l=${this._locale}`
            rp(uri).then(raw => {
                const uris = JSON.parse(_trim(raw)).aaData.map(
                    e => `https://bdocodex.com/${this._locale}/recipe/${e[0]}/`
                )

                loadMultiple(uris).then(scrapers => {
                    res(scrapers.map(scraper => scraper.getRecipe()))
                })
            })
        })
    }

    /**
     * Returns an object containing the materials and results of a recipe.
     * Returns null if uri is not of type recipe.
     */
    getRecipe() {
        const isRecipe = this._uri.split('/')[4] === 'recipe'

        if (!isRecipe)
            return null

        const recipe = { materials: [], results: [] }

        const buildArr = (key, slicer) => {
            this.$(
                this.$('table.smallertext > tbody > tr').toArray().find(
                    node => this.$(node).text().indexOf(slicer) !== -1
                )
            ).find('td > *').toArray().forEach((node, i, arr) => {
                const elem = this.$(node)
                const cx   = elem.attr('class')
    
                if (!cx || cx.indexOf('iconset_wrapper_medium') === -1)
                    return
                
                const anchor = this.$(arr[i+1])
                const link   = anchor.attr('href')
                const amount = parseInt(_trim(elem.text()))
    
                recipe[key].push({
                    name:   _trim(anchor.text()),
                    amount: isNaN(amount) ? 1 : amount,
                    id:     link.replace(/\D/g, ''),
                    grade:  anchor.attr('class').replace(/\D/g, ''),
                    link,
                })
            })
        }

        buildArr('materials', this._slicers.RECIPE_MATERIALS)
        buildArr('results',   this._slicers.RECIPE_RESULTS)

        recipe.skillLvl = this.getRecipeSkillLevel()
        recipe.exp      = this.getRecipeExp()

        return recipe
    }

    /**
     * Returns the skill level of a recipe if it exists, otherwise returns null.
     */
    getRecipeSkillLevel() {
        return BDOScraper.getFromWrapperArr(
            this.$,
            this._slicers.RECIPE_SKILLLVL,
            this.$('.category_text').parent().contents().toArray()
        )
    }

    /**
     * Returns the exp received when crafting a recipe if it exists, otherwise
     * returns null.
     */
    getRecipeExp() {
        const exp = BDOScraper.getFromWrapperArr(
            this.$,
            this._slicers.RECIPE_EXP,
            this.$('.category_text').parent().contents().toArray()
        )
        return exp ? parseInt(exp) : null
    }
}

/**
 * Remove trailling characters from string.
 * 
 * @param {string} str String to be trimmed.
 */
const _trim = (str) => str.replace('–', '').trim()

/**
 * Returns a promise that when resolved will return an instance of the Scraper if
 * the uri is valid, or null otherwise.
 * 
 * @param {string} uri Url for the item for BDOCodex or BDDatabase.
 */
const load = (uri) => new Promise(res => {
    rp(uri).then(html => {
        const $ = cheerio.load(html)

        if ($('.page_outer').children().length > 0)
            return res(new BDOScraper($, uri))
        
        return res(null)
    }).catch(err => console.error(err))
})

/**
 * Returns a promise that will only resolve when ALL requests are finished. Useful when
 * batching small amount of items.
 * 
 * @param {array || string} uris Array of urls for the items for BDOCodex or BDDatabase.
 */
const loadMultiple = (uris) => new Promise(res => {
    if (!Array.isArray(uris)) uris = [uris]

    Promise.all(
        uris.map(uri => load(uri))
    ).then(scrapers => res(scrapers))
})

module.exports = {
    load,
    loadMultiple,
}
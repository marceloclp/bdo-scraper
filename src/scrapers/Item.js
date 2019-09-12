const Scraper = require('./Scraper')
const Util = require('../lib')

module.exports = class Item extends Scraper {

    parseUris() {
        return this._langs.map(lang => `https://bdocodex.com/${lang}/item/${this._id}/`)
    }

    getData() {
        const parse = (f) => Object.keys(this._parsers).reduce((data, l) => {
            data[l] = f(l)
            return data
        }, {})

        return {
            icon: this.getIcon(),
            grade: this.getGrade(),
            weight: this.getWeight(),
            stats: this.getStats(),
            name: parse(this.getName.bind(this)),
            type: parse(this.getType.bind(this)),
            description: parse(this.getDescription.bind(this)),
        }
    }

    // Returns the item weight.
    getWeight($ = this._parsers[this._langs[0]]) {
        let weight
        $('.category_text').parent().contents().each((i, node) => {
            if (node.type !== 'text')
                return
            weight = Util.trim(node.data)
            if (weight)
                return false
        })
        return Util.sliceFromSubstr(weight, ' ')
    }

    // Returns the item stats if item is an equipment.
    getStats($ = this._parsers[this._langs[0]]) {
        // If stats are not available, return undefined.
        if (!$('#damage').length)
            return undefined
        
        const stats = {
            damage:     Util.trim($('#damage').text()),
            defense:    Util.trim($('#defense').text()),
            accuracy:   Util.trim($('#accuracy').text()),
            evasion:    Util.trim($('#evasion').text()),
            dreduction: Util.trim($('#dreduction').text()),
        }

        // If all stats are 0, then BDOCodex doesn't show them, so return null.
        if (Object.values(stats).every(val => ['0', '0 ~ 0'].includes(val)))
            return null

        return stats
    }

    // Returns the item description if available.
    getDescription(l, $ = this._parsers[l]) {
        const keyword  = Util.getLangKeyword(l, 'DESCRIPTION')
        const children = $('table.smallertext > tbody > tr:last-child > td').contents().toArray()
        
        const startIdx = children.findIndex(
            node => node.type === 'text' && node.data.indexOf(keyword) > -1
        ) + 1

        let description = ''

        for (let i = startIdx; i < children.length; i++) {
            const { type, name, data } = children[i]

            if (description) {
                // Description always ends when there is a double line break.
                if (type === 'tag' && name === 'br')
                    if (i+1 < children.length && children[i+1].type === 'tag')
                        break

                // Description should end when a new HTML element is found and
                // it already has found a description.
                if (type === 'tag' && name !== 'br')
                    break
                
                // If it starts with one of the special characters, then it's a
                // new topic, or observation.
                if (type === 'text' && (Util.startsWith(data, ['-', '–', '※']) || data.indexOf(':') > 0))
                    break
            } else if (name !== 'br') {
                if (type === 'text')
                    description += Util.trim(data) + '\n'
                else
                    description += Util.trim($(children[i]).text()) + '\n'
            }
        }
        
        return Util.trim(description) || null
    }

}
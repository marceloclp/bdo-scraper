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
            name: parse(this.getName.bind(this)),
            type: parse(this.getType.bind(this)),
        }
    }

    // Returns the item weight.
    getWeight(l, $ = this._parsers[l]) {
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
        if ($('#damage').text())
            return null
        return {
            damage:     Util.trim($('#damage').text()),
            defense:    Util.trim($('#defense').text()),
            accuracy:   Util.trim($('#accuracy').text()),
            evasion:    Util.trim($('#evasion').text()),
            dreduction: Util.trim($('#dreduction').text()),
        }
    }
}
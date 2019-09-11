const Scraper = require('./Scraper')
const Util = require('../lib')

module.exports = class Item extends Scraper {

    parseUris() {
        return this._langs.map(lang => `https://bdocodex.com/${lang}/item/${this._id}/`)
    }

    getData(parsers) {
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

}
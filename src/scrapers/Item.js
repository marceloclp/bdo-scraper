const Scraper = require('./Scraper')
const Util = require('../lib')

module.exports = class Item extends Scraper {

    parseUris() {
        return this._langs.map(lang => `https://bdocodex.com/${lang}/item/${this._id}/`)
    }

    getAll(l) {
        return {
            name: this.getName(l),
            grade: this.getGrade(),
            icon: this.getIcon(),
            type: this.getType(l),
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
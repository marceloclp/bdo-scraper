const Scraper = require('./Scraper')
const Util = require('../lib')

module.exports = class Materialgroup extends Scraper {
    parseUris() {
        return this._langs.map(lang => `https://bdocodex.com/${lang}/materialgroup/${this._id}/`)
    }

    getData() {
        // Define a default language.
        const l = Object.keys(this._parsers)[0]
        
        const mapToLang = (func) => {
            const langs = Object.keys(this._parsers)
            const data = langs.reduce((data, l) => {
                data[l] = func(l)
                return data
            }, {})
            if (Object.values(data).every(e => e === null))
                return null
            if (Object.values(data).every(e => e === undefined))
                return undefined
            return data
        }

        return {
            id: this._id,
            icon: this.getIcon(),
            materials: this.getMats()
        }
    }

    getMats($ = this._parsers[this._langs[0]]) {
        let children = $('table.smallertext > tbody > tr:last-child > td').children('a')
        let mats = children.map((i, elem) => ({
            id: $(elem).attr("data-id").substring(6),
            name: $(elem).text()
        })).get()

        console.log(mats)
        return mats
    }
}
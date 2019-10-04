const Scraper = require('./Scraper')
const Util = require('../lib')

module.exports = class Recipe extends Scraper {

    constructor(id, manufacture, langs) {
        super(id, langs)
        this._manufacture = manufacture
    }

    parseUris() {
        return this._langs.map(lang => `https://bdocodex.com/${lang}/${this._manufacture ? "m" : ""}recipe/${this._id}/`)
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
            materials: this.getMats(),
            results: this.getResults(),
            misc: this.getMisc()
        }
    }

    getMats($ = this._parsers[this._langs[0]]) {
        let children = $('table.smallertext > tbody > tr:nth-child(5) > td').children('a')
        //console.log($('table.smallertext > tbody > tr:nth-child(5) > td').html())

        let mats = children.map((i, elem) => {
            let d = $(elem).attr("data-id").match(/([a-z]+)\-\-(\d+)/)
            return {
                name: $(elem).text(),
                type: d[1],
                id: d[2]
            }
            //type: $(elem).attr("data-id").contains("item") ? "item" : "materialgroup"
        }).get()

        //console.log(mats)
        return mats
    }

    getResults($ = this._parsers[this._langs[0]]) {
        let children = $('table.smallertext > tbody > tr:nth-child(6) > td').children('a')
        //console.log($('table.smallertext > tbody > tr:nth-child(5) > td').html())

        let res = children.map((i, elem) => {
            let d = $(elem).attr("data-id").match(/([a-z]+)\-\-(\d+)/)
            return {
                name: $(elem).text(),
                type: d[1],
                id: d[2]
            }
            //type: $(elem).attr("data-id").contains("item") ? "item" : "materialgroup"
        }).get()

        //console.log(mats)
        return res
    }

    getMisc($ = this._parsers[this._langs[0]]) {
        let children = $('table.smallertext > tbody > tr:nth-child(4) > td:nth-child(2)').text()
        
        let exp = 0
        try {
            exp = children.match(/.*EXP: (\d+)/)
            exp = exp[1]
        } catch (e) {
            exp = 0
        }
        
        //console.log(exp)

        let sub = $('table.smallertext > tbody > tr:nth-child(4) > td:nth-child(2)').html()
        
        let skilllevel = sub.match(/.*Skill level: ([A-Za-z]+) (\d+).*/)
        skilllevel = skilllevel[1]+" " + skilllevel[2]
        
        let lifeskill = sub.match(/.*yellow_text\"\>([A-Za-z\/\s]+)\<.*/)
        lifeskill = lifeskill[1]
        

        //console.log(mats)
        return {
            exp: exp,
            skilllevel: skilllevel,
            lifeskill: lifeskill
        }
    }
}
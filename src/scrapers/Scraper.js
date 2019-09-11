const request  = require('request-promise')
const cheerio  = require('cheerio')

const {
    trim,
    sliceFromSubstr
} = require('../lib')

const {
    available_langs,
    default_lang,
} = require('../config/settings.json')

module.exports = class Scraper {

    constructor(id, langs) {
        if (isNaN(id) && isNaN(parseInt(id)))
            throw `Invalid id/${id} passed to Scraper constructor`
        
        if (!langs)
            langs = [default_lang]

        if (!Array.isArray(langs))
            langs = [langs]
        
        if (langs.find(lang => !available_langs.includes(lang)))
            throw `Invalid langs/[${langs}] passed to Scraper constructor`
        
        this._id      = id
        this._langs   = langs
        this._parsers = {}
    }

    // Validates the request response.
    validateRequest(uri, l) {
        return new Promise(resolve => {
            request(uri).then(html => {
                const $ = cheerio.load(html)

                if (!$('.page_outer').children().length)
                    return resolve(null)
                
                return resolve({ $, l, uri })
            })
            .catch(err => {
                console.error(err)
                resolve(null)
            })
        })
    }

    // Scrapes BDOCodex for the data.
    scrape() {
        return new Promise(resolve => {
            Promise.all(
                this.parseUris().map((uri, i) => this.validateRequest(uri, this._langs[i]))
            ).then(arr => {
                // Check if there were valid parsers.
                if (!arr.length)
                    throw `Item id/${this._id} doesn't exist or there was a request error`

                let data = {}
                arr.forEach(parser => {
                    const { $, l, uri } = parser
                    this._parsers[l] = $
                    data[l] = this.getAll(l)
                })

                resolve(data)
            })
        })
    }

    // Parses scraper uris.
    parseUris() {}

    getAll() {}

    // Returns the entity name.
    getName(l, $ = this._parsers[l]) {
        return trim($('.item_title').text()) || null
    }

    // Returns the entity grade.
    getGrade(l, $ = this._parsers[l]) {
        return parseInt(trim(
            sliceFromSubstr($('.item_title').attr('class'), 'item_grade_')
        ))
    }

    // Returns the entity icon url.
    getIcon($ = this._parsers[0]) {
        return this.$('.item_icon[alt=icon]').attr('src') || null
    }

    // Returns the item stats.
    getStats() {}

    // Returns the item weight.
    getWeight() {}

    // Returns the entity type.
    getType() {}

    // Returns a computed version of the entity type.
    computeType() {}

    // Returns the item prices.
    getPrices() {}

    // Returns the item effects.
    getItemEffects() {}
    getEnhancementEffects() {}

    // Returns the item description.
    getDescription() {}

    // Returns the item recipes.
    getRecipes() {}
}
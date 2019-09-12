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

                arr.forEach(parser => this._parsers[parser.l] = parser.$)

                resolve(this.getData())
            })
        })
    }

    // Parses scraper uris.
    parseUris() {}

    // Returns all of the available data.
    getData() {}

    // Returns the entity name.
    getName(l, $ = this._parsers[l]) {
        return trim($('.item_title').text()) || null
    }

    // Returns the entity grade.
    getGrade($ = this._parsers[this._langs[0]]) {
        return parseInt(trim(
            sliceFromSubstr($('.item_title').attr('class'), 'item_grade_')
        ))
    }

    // Returns the entity icon url.
    getIcon($ = this._parsers[this._langs[0]]) {
        return $('.item_icon[alt=icon]').attr('src') || null
    }

    // Returns the entity type.
    getType(l, $ = this._parsers[l]) {
        return trim($('.category_text').text()) || null
    }
}
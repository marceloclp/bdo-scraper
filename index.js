const rp      = require('request-promise')
const cheerio = require('cheerio')
const SLICERS = require('./slicers.json')

class BDOScraper {
    constructor($, uri) {
        this.$        = $
        this._uri     = uri
        this._slicers = BDOScraper.buildSlicersObj(uri)

        // Reusable item properties.
        this._src = null
    }

    static buildSlicersObj(uri) {
        const LANGS = ['us', 'pt']

        let slicers = {}
        let keys    = {}
        Object.keys(SLICERS).forEach(key => {
            const k = key.slice(0, key.indexOf('_'))
            if (!keys.hasOwnProperty(k))
                keys[k] = null
        })
        keys = Object.keys(keys)
    
        uri.split('/').forEach(p => {
            if (p.length !== 2)
                return
    
            for (let i = 0; i < LANGS.length; i++) {
                if (p === LANGS[i] || p.toUpperCase() === LANGS[i]) {
                    keys.map(str => {
                        const key = `${str}_${LANGS[i].toUpperCase()}`
                        if (SLICERS.hasOwnProperty(key))
                            slicers[str] = SLICERS[key]
                    })
                }
            }
        })

        return Object.keys(slicers).length ? slicers : null
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
     * Returns an object containing the stats for an equipment if it exists.
     */
    getStats() {
        return {
            damage:     _trim(this.$('#damage').text())     || null,
            defense:    _trim(this.$('#defense').text())    || null,
            accuracy:   _trim(this.$('#accuracy').text())   || null,
            evasion:    _trim(this.$('#evasion').text())    || null,
            dreduction: _trim(this.$('#dreduction').text()) || null,
        }
    }

    /**
     * Returns the weight of the item if it exists.
     */
    getWeight() {
        const slicer = ': '
        const raw    = _trim(this.$('.category_text').parent().contents().last().text())

        return raw.slice(
            raw.indexOf(slicer) + slicer.length
        ) || null
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
        const contentsArr = this.$('table.smallertext > tbody > tr').last().children().first().contents().toArray()
        let idx

        for (idx = 0; idx < contentsArr.length; idx++) {
            const elem = this.$(contentsArr[idx])

            if (elem.text().indexOf(this._slicers.DESCRIPTION) !== -1)
                break
        }

        if (idx === contentsArr.length - 1)
            return null
        
        return _trim(this.$(contentsArr[idx + 2]).text())
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
const Scraper = require('./Scraper')

module.exports = class Item extends Scraper {

    parseUris() {
        return this._langs.map(lang => `https://bdocodex.com/${lang}/item/${this._id}/`)
    }

    getAll(l) {
        return {
            name: this.getName(l)
        }
    }

}
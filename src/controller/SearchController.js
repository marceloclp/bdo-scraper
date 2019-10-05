const Controller = require('./Controller')

class SearchController extends Controller {
    constructor(lang, term) {
        super(null, lang, null)
        this._term = term
    }

    get(flag) {
        return this.format(this.parseFlag(flag))
    }

    parseFlag(flag) {
        if (flag)
            return `ac.php?l=${this._lang}&term=${this._term}`
        return this.parseQuery({ a: 'search', l: this._lang, sq: this._term })
    }
}

module.exports = SearchController
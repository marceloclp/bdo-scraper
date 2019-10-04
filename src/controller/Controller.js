class Controller {
    constructor(id, lang, type) {
        this._id   = id
        this._lang = lang
        this._type = type
        this._base = 'https://bddatabase.net/'
    }

    /**
     * Builds the correct path for the controller.
     * 
     * @param {string} flag   A string that indicates an option.
     * @param {object} query  An object that describes a query.
     * @returns a path string.
     */
    get(flag, query) {
        let uri
        if (flag)
            uri = this.parseFlag(flag)
        else if (query)
            uri = this.parseQuery(query)
        return this.format(uri)
    }

    /**
     * Parses a query object into a string.
     * 
     * @param {object} query The object to be parsed into a query string.
     * @returns a query string.
     */
    parseQuery(query) {
        if (!query)
            return null
        return 'query.php?' + Object.keys(query).map(
            key => `${key}=${query[key]}`
        ).join('&')
    }

    /**
     * Selects an option from a flag.
     * 
     * @param {string} flag A string that indicates an option.
     * @returns a path string.
     */
    parseFlag(flag) {}

    /**
     * Formats a string into a valid uri.
     * 
     * @param {string} uri The string to be formatted.
     * @returns a uri string.
     */
    format(uri) {
        if (!uri)
            return null
        return this._base + uri
    }
}

module.exports = Controller
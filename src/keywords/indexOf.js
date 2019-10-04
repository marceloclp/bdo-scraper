const get = require('./get')

/**
 * Checks if a keyword is a substring of a given `str`.
 * @param {string} lang  The keyword`s object language.
 * @param {string} str   The string to be checked.
 * @param {string} key   The name of the keyword to be checked.
 * @returns The index of the keyword in the `str` if exists, -1 otherwise.
 */
const indexOf = (lang, str, key) => {
    if (typeof str !== 'string' || !str.length)
        return -1
    
    let keyword = get(lang, key)
    if (!Array.isArray(keyword))
        keyword = [keyword]

    for (let i = 0; i < keyword.length; i++) {
        const idx = str.indexOf(keyword[i])
        if (idx > -1)
            return idx
    }

    return -1
}

module.exports = indexOf
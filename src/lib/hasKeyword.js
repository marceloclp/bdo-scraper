const keywords = require('../config/keywords.json')

/**
 * Checks if `str` contains a keyword.
 * @param {string} str   The string to be checked.
 * @param {string} l     The selected language.
 * @param {string} key   The key name.
 */
const hasKeyword = (str, l, key) => {
    if (!(l in keywords) || !(key in keywords[l]))
        throw `Invalid ${l}/${key} at hasKeyword()`
    let keys = keywords[l][key]
    if (!Array.isArray(keys))
        keys = [keys]
    for (let i = 0; i < keys.length; i++)
        if (str.indexOf(keys[i]) > -1)
            return true
    return false
}

module.exports = hasKeyword
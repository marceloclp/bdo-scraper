const get = require('./get')

/**
 * Slices a string from the start to the last index of a given keyword.
 * 
 * @param {string} lang  The keyword`s object language.
 * @param {string} str   The string to be sliced.
 * @param {string} key   The name of the keyword to be used.
 * @returns the new string if the keyword is a substring of `str`, or `null`.
 */
const slice = (lang, str, key) => {
    if (typeof str !== 'string' || !str.length)
        return null
    
    let keyword = get(lang, key)
    if (!Array.isArray(keyword))
        keyword = [keyword]

    for (let i = 0; i < keyword.length; i++) {
        const startIdx = str.indexOf(keyword[i])
        if (startIdx > -1)
            return str.slice(startIdx + keyword[i].length)
    }

    return null
}

module.exports = slice
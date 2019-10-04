const sliceOnSubstr = require('./sliceOnSubstr')

/**
 * Returns the substring between the substrings `a` and `b`.
 * 
 * @param {string} str String to return the substring.
 * @param {string} a   The left substring.
 * @param {string} b   The right substring.
 * @returns the substring between the substrings `a` and `b`.
 */
const substrBetween = (str, a, b) => {
    if (!str || typeof str !== 'string')
        return null

    let startIdx = 0, endIdx = str.length

    if (a && typeof a === 'string') {
        const idx = str.indexOf(a)
        if (idx > -1) startIdx = idx + a.length
    }

    if (b && typeof b === 'string') {
        const idx = str.indexOf(b, startIdx + 1)
        if (idx > -1) endIdx = idx
    }

    return str.slice(startIdx, endIdx)
}

module.exports = substrBetween
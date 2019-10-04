/**
 * Slices a string from the start to the end of a given substring.
 * 
 * @param {string} str     String to be changed.
 * @param {string} substr  String to find the slicing point on `str`.
 * @returns the new string if successful, or `null`.
 */
const sliceOnSubstr = (str, substr) => {
    if (!str || typeof str !== 'string')
        return null
    const idx = str.indexOf(substr)
    if (idx === -1)
        return null
    return str.slice(idx + substr.length)
}

module.exports = sliceOnSubstr
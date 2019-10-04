/**
 * Checks if a string starts with one specific character.
 * @param {string}             str    String to be checked.
 * @param {string || string[]} chars  Array or string of chars.
 * @returns true if starts with one of the chars, false otherwise.
 */
const startsWith = (str, chars) => {
    if (!Array.isArray(chars))
        chars = [chars]
    const startChar = str[0]
    for (let i = 0; i < chars.length; i++)
        if (startChar === chars[i])
            return true
    return false
}
module.exports = startsWith
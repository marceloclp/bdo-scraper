const _trim = require('lodash.trim')

/**
 * Trims all specified chars from the beggining and ending of a string.
 * 
 * This is an abstraction of the default trim method.
 * 
 * @param {string} str    String to trim.
 * @param {string} chars  String of characters to be removed.
 */
const trim = (str, chars = '') => {
    return _trim(str, chars + ' -–\n')
}

module.exports = trim
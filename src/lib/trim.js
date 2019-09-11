const _trim = require('lodash').trim

const trim = (str, chars) => {
    return _trim(str, chars + '–\n')
}

module.exports = trim
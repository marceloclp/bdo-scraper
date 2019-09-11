const _trim = require('lodash').trim

const trim = (str, chars) => {
    return _trim(str, chars)
}

module.exports = trim
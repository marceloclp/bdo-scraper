const keywords = require('./keywords.json')

const get = (l, key) => {
    if (!(l in keywords))
        throw `${l} is not a supported language.`
    if (!(key in keywords[l]))
        throw `${key} is not a supported keyword.`
    return keywords[l][key]
}

module.exports = get
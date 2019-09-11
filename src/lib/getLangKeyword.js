const keywords = require('../config/keywords.json')

const getLangKeyword = (l, key) => {
    if (l in keywords && key in keywords[l])
        return keywords[l][key]
    throw `Invalid ${l}/${key} at getLangKeyword()`
}

module.exports = getLangKeyword
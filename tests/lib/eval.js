const { isEqual } = require('lodash')

const eval = (obj1, obj2) => {
    return isEqual(obj1, obj2)
}

module.exports = eval
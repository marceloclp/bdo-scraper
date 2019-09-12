const { isEqual } = require('lodash')
const stringify   = require('stringify-object')

const eval = (property, expectedObj, resultObj) => {
    if (isEqual(expectedObj, resultObj))
        return
    
    console.log([
        property + ' ' + '='.repeat(20),
        '='.repeat(50) + ' EXPECTED RESULT',
        stringify(expectedObj),
        '='.repeat(50) + ' RESULT',
        stringify(resultObj),
    ].join('\n'))
}

module.exports = eval
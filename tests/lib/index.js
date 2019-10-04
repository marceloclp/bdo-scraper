const isEqual = require('lodash.isequal')
const stringify   = require('stringify-object')

const test = async (scraper, lang, expectedArr) => {
    const ids = expectedArr.reduce((acc, cur) => {
        acc.push(cur.id)
        return acc
    }, [])

    const resultsArr = await Promise.all(
        ids.map(id => scraper(id, lang))
    )

    // Some of the promises failed.
    if (resultsArr.length !== expectedArr.length) {
        console.log([
            `Number of requests: ${expectedArr.length}`,
            `Number of results:  ${resultsArr.length}`,
            ``
        ].join(`\n`));
    }

    // Check the objects.
    for (let i = 0; i < resultsArr.length; i++) {
        const result   = resultsArr[i]
        const expected = expectedArr.find(e => e.id === result.id)

        const testRes  = testEntity(expected, result)

        if (!testRes.length)
            continue
        
        console.log(parseError(result.id, testRes))
        break
    }
}

const testEntity = (expected, result) => {
    return Object.keys(result).map(key => {
        if (!(key in expected))
            return errorMissingKey(key)

        /*if (['recipes', 'used_in_recipe', 'used_in_design'].includes(key))
            return testEntity(expected[key], result[key])*/
        
        if (!isEqual(expected[key], result[key]))
            return errorWrongValue(key, expected[key], result[key])
    
        return null
    }).filter(e => e)
}

const errorHeader = (id) => {
    return [
        `ID ${id} =================================================== ID ${id}`,
        `ID ${id} =================================================== ID ${id}`,
        `ID ${id} =================================================== ID ${id}`,
        ``
    ].join(`\n`)
}

const errorMissingKey = (key) => {
    return `\n${key} is missing on expected results.\n`
}

const errorWrongValue = (key, expected, result) => {
    return [
        `. ${key}`,
        `EXPECTED.............................................................`,
        stringify(expected),
        `RESULTS..............................................................`,
        stringify(result),
        ``
    ].join(`\n`)
}

const parseError = (id, errors) => {
    return [
        errorHeader(id),
        errors.reduce((acc, cur) => `\n` + acc + cur + `\n`, '')
    ].join('')
}

module.exports = { test, testEntity }
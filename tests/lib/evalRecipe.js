const BDOScraper = require('./../../src')
const isEqual    = require('lodash').isEqual

module.exports = (uri, expected) => {
    BDOScraper.load(uri).then(scraper => {
        const recipe = scraper.getRecipe()
        
        let isInvalid = false
        expected.materials.forEach((item, i) => {
            if (!isEqual(item, recipe.materials[i])) {

                if (!isInvalid) {
                    console.log(`[id/${scraper._id}/recipe/materials]`)
                    isInvalid = true
                }

                console.error([
                    `    - EXPECTED:`,
                    `${JSON.stringify(item)}`,
                    `    - GOT:`,
                    `${JSON.stringify(recipe.materials[i])}`
                ].join('\n'))
            }
        })

        isInvalid = false
        expected.results.forEach((item, i) => {
            if (!isEqual(item, recipe.results[i])) {

                if (!isInvalid) {
                    console.log(`[id/${scraper._id}/recipe/results]`)
                    isInvalid = true
                }

                console.error([
                    `    - EXPECTED:`,
                    `${JSON.stringify(item)}`,
                    `    - GOT:`,
                    `${JSON.stringify(recipe.results[i])}`
                ].join('\n'))
            }
        })
    })
}
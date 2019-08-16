const BDOScraper = require('./../../src')
const isEqual    = require('lodash').isEqual

const map_key_to_func = (scraper, key) => {
    return {
        name:                () => scraper.getName(),
        alt_name:            () => scraper.getAltName(),
        grade:               () => scraper.getGrade(),
        icon:                () => scraper.getIcon(),
        stats:               () => scraper.getStats(),
        weight:              () => scraper.getWeight(),
        type:                () => scraper.getType(),
        detailed_type:       () => scraper.getDetailedType(),
        prices:              () => scraper.getPrices(),
        item_effects:        () => scraper.getItemEffects(),
        enhancement_effects: () => scraper.getEnhancementEffects(),
        description:         () => scraper.getDescription(),
        recipeSkillLvl:      () => scraper.getRecipeSkillLevel(),
        recipeExp:           () => scraper.getRecipeExp(),
    }[key]()
}

module.exports = (uri, expected) => {
    let isInvalid = false
    
    BDOScraper.load(uri).then(scraper => {
        Object.keys(expected).forEach(key => {
            const val = map_key_to_func(scraper, key)

            if (!isEqual(val, expected[key])) {

                if (!isInvalid) {
                    console.log(`\n=====> id/${scraper._id}/${expected.name}`)
                    console.log(scraper._uri + '\n')
                    isInvalid = true
                }

                console.error([
                    `[id/${scraper._id}/${key}]`,
                    `    - EXPECTED:`,
                    `${JSON.stringify(expected[key])}`,
                    `    - GOT:`,
                    `${JSON.stringify(val)}`
                ].join('\n'))
            }
        })
    })
}
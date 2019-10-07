const scraperTypes = require('./scraperType')

const mapStrToEnum = {
    us: [
        'Item',
        'NPC',
        'Quest',
        'Recipe',
        'Knowledge',
    ],
    pt: [
        'Item',
        'NPC',
        'Busca',
        'Receita',
        'Conhecimento',
    ]
}

const enumsArr = [
    scraperTypes.item,
    scraperTypes.npc,
    scraperTypes.quest,
    scraperTypes.recipe,
    scraperTypes.knowledge,
]

// If there are n number of strings that are repeated in multiple languages,
// it's assumed they will always map to the same enum.
//
// Ex: `us.Item` maps to the same enum as `pt.Item`.
module.exports = Object.keys(mapStrToEnum).reduce((Enum, lang) => {
    mapStrToEnum[lang].forEach(
        (key, i) => Enum[key] = enumsArr[i]
    )
    return Enum
}, {})
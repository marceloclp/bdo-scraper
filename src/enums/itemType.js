const mapTypeToEnum = {
    us: [
        'Equipment',
        'Consumable',
        'Special Items',
        'Crafting Materials',
        'General',
        'License',
        'Recipe',
        'Item group'
    ],
    pt: [
        'Equipamento',
        'Consumível',
        'Item Especial',
        'Material necessário',
        'Geral',
        'Registro',
        'Receita',
        'Item group_todo_translateme'
    ]
}

const typeEnum = [
    'equipment',
    'consumable',
    'special_items',
    'crafting_materials',
    'general',
    'license',
    'recipe',
    'materialgroup'
]

/**
 * Converts an item type to a string enumerator.
 * 
 * @param {string} lang  The item type's language.
 * @param {string} str   The item type.
 * @returns the enumerator for the item type.
 */
const itemType = (lang, str) => {
    if (!(lang in mapTypeToEnum))
        throw `${lang} is not a supported language.`
    const idx = mapTypeToEnum[lang].indexOf(str)
    if (idx === -1)
        console.error(`${str} is not a defined type at Enums.itemType().`)
    return typeEnum[idx]
}

module.exports = itemType
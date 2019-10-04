const arrs = {
    us: [
        'Equipment',
        'Consumable',
        'Special Items',
        'Crafting Materials',
        'General',
        'License',
        'Recipe',
    ],
    pt: [
        'Equipamento',
        'Consumivel',
        'Item Especial',
        'Material necessário',
        'Geral',
        'Registro',
        'Receita',
    ]
}

const keys = [
    'equipment',
    'consumable',
    'special_items',
    'crafting_materials',
    'general',
    'license',
    'recipe'
]

/**
 * Converts an item type to a string enumerator.
 * @param {string} lang  The item type's language.
 * @param {string} str   The item type.
 * @returns the enumerator for the item type.
 */
const itemType = (lang, str) => {
    if (!(lang in arrs))
        throw `${lang} is not a suppoted language.`
    const idx = arrs[lang].indexOf(str)
    if (idx === -1)
        throw `${str} is not a defined type.`
    return keys[idx]
}

module.exports = itemType
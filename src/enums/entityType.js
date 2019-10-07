const itemTypes = require('./itemType')

const enumObj = {
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
        'Grupo de itens'
    ]
}

const enumArr = [
    itemTypes.equipment,
    itemTypes.consumable,
    itemTypes.specialItems,
    itemTypes.craftingMaterial,
    itemTypes.general,
    itemTypes.license,
    itemTypes.recipe,
    itemTypes.materialGroup,
]

module.exports = Object.keys(enumObj).reduce((Enum, lang) => {
    enumObj[lang].forEach(
        (key, i) => Enum[key] = enumArr[i]
    )
    return Enum
}, {})
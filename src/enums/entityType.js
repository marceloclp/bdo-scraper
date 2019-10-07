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
    'equipment',
    'consumable',
    'special_items',
    'crafting_materials',
    'general',
    'license',
    'recipe',
    'materialgroup'
]

module.exports = Object.keys(enumObj).reduce((Enum, lang) => {
    enumObj[lang].forEach(
        (key, i) => Enum[key] = enumArr[i]
    )
    return Enum
}, {})
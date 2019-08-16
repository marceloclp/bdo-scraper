const { evalItem } = require('./lib')

// https://bdocodex.com/us/item/5467/
// Special Dry Mane Grass
// 5467

const data = {
    name: 'Special Dry Mane Grass',
    alt_name: '특상품 마른갈기풀',
    grade: '2',
    icon: '/items/new_icon/03_etc/07_productmaterial/00005404.png',
    stats: {
        damage: null,
        defense: null,
        accuracy: null,
        evasion: null,
        dreduction: null,
    },
    weight: '0.10 LT',
    type: 'Consumable',
    detailed_type: ['03_etc', '07_productmaterial'],
    prices: {
        buy: '8,925',
        sell: '357',
        repair: null,
    },
    item_effects: [],
    enhancement_effects: [],
    description: `A Farming product that can be employed to modify other materials using Alchemy.`
}

evalItem('https://bdocodex.com/us/item/5467/', data)
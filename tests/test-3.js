const { evalItem } = require('./lib')

// https://bdocodex.com/us/item/4267/
// Black Gold Ingot
// 4267

const data = {
    name: 'Black Gold Ingot',
    alt_name: '흑금 주괴',
    grade: '0',
    icon: '/items/new_icon/03_etc/07_productmaterial/00004267.png',
    stats: null,
    weight: '0.30 LT',
    type: 'Crafting Materials',
    detailed_type: ['03_etc', '07_productmaterial'],
    prices: {
        buy: '200,000',
        sell: '20,000',
        repair: null,
    },
    item_effects: [],
    enhancement_effects: [],
    description: `A gatherable natural ingredient that has been processed and may be used during crafting. It can be changed to a different form through alchemy or processing.`
}

evalItem('https://bdocodex.com/us/item/4267/', data)
const { evalItem } = require('./lib')

// https://bdocodex.com/us/item/10963/
// Ultimate Grunil Gloves
// 10963

const data = {
    name: 'Ultimate Grunil Gloves',
    alt_name: '극 그루닐 장갑',
    grade: '3',
    icon: '/items/new_icon/06_pc_equipitem/00_common/11_hand/00010935.png',
    stats: {
        damage: '0 ~ 0',
        defense: '6',
        accuracy: '0',
        evasion: '1 (+3)',
        dreduction: '5',
    },
    weight: '17.00 LT',
    type: 'Equipment',
    detailed_type: ['06_pc_equipitem', '00_common', '11_hand'],
    prices: {
        buy: '160,000',
        sell: '32,000',
        repair: '16,000',
    },
    item_effects: [],
    enhancement_effects: [],
    description: `Gear at its maximum potential.\nThere is a slight chance this will be crafted when crafting a lower-grade version of the gear.`
}

evalItem('https://bdocodex.com/us/item/10963/', data)
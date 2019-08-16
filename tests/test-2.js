const { evalItem } = require('./lib')

// https://bdocodex.com/us/item/11017/
// Dim Tree Spirit's Armor
// 11017

const data = {
    name: `Dim Tree Spirit's Armor`,
    alt_name: '우둔한 나무 정령의 갑옷',
    grade: '3',
    icon: '/items/new_icon/06_pc_equipitem/00_common/09_upperbody/00011017.png',
    stats: {
        damage: '0 ~ 0',
        defense: '6',
        accuracy: '0',
        evasion: '5 (+15)',
        dreduction: '1 (+10)'
    },
    weight: '21.00 LT',
    type: 'Equipment',
    detailed_type: ['06_pc_equipitem', '00_common', '09_upperbody'],
    prices: {
        buy: '125,000,000',
        sell: '54,000',
        repair: '36,000'
    },
    item_effects: [
        'Max HP+200',
        'Max MP/WP/SP +100',
    ],
    enhancement_effects: [],
    description: `Dim Tree Spirit Armor. You can feel the power of nature in it.`
}

evalItem('https://bdocodex.com/us/item/11017/', data)
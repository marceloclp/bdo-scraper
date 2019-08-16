const { evalItem } = require('./lib')

// https://bdocodex.com/us/item/715001/
// Blackstar Longsword
// 715001

const data = {
    name: 'Blackstar Longsword',
    alt_name: '검은별 장검',
    grade: '4',
    icon: '/items/new_icon/06_pc_equipitem/00_common/01_weapon/00715001.png',
    stats: {
        damage: '21 ~ 27',
        defense: '0',
        accuracy: '20',
        evasion: '0',
        dreduction: '0',
    },
    weight: '13.50 LT',
    type: 'Equipment',
    detailed_type: ['06_pc_equipitem', '00_common', '01_weapon'],
    prices: {
        buy: '285,000,000',
        sell: '2,250,000',
        repair: '100,000'
    },
    item_effects: [
        'Extra Damage to All Species +10',
        'Attack Speed +3 Level',
        'Casting Speed +3 Level',
    ],
    enhancement_effects: [
        'Extra AP against monsters up (enhancement level PRI or up)',
        'Extra Damage to All Species Up',
        'All AP Up',
        'All Accuracy Up',
    ],
    description: `A weapon made with the claw obtained by defeating the Incarnation of Corruption at Star's End. It is imbued with the power of the ancient Ator. Only Dorin Morgrim can forge this weapon.`
}

evalItem('https://bdocodex.com/us/item/715001/', data)
const isEqual = require('lodash').isEqual
const BDOScraper = require('./index')

const evalAttr = (id, key, expected, result) => {
    if (!isEqual(expected, result)) {
        console.error([
            `\nOn item id/${id}/${key}:`,
            ` - Expected result: ${JSON.stringify(expected)}`,
            ` - Gotten:          ${JSON.stringify(result)}`,
        ].join('\n'))
    } else {
        console.log(`\nCorrect on id/${id}/${key}`)
    }
}

const evalItem = (uri, id, expected) => {
    BDOScraper.load(uri).then(scraper => {

        const name                = scraper.getName()
        const alt_name            = scraper.getAltName()
        const grade               = scraper.getGrade()
        const icon                = scraper.getIcon()
        const stats               = scraper.getStats()
        const weight              = scraper.getWeight()
        const type                = scraper.getType()
        const detailed_type       = scraper.getDetailedType()
        const prices              = scraper.getPrices()
        const item_effects        = scraper.getItemEffects()
        const enhancement_effects = scraper.getEnhancementEffects()
        const description         = scraper.getDescription()

        console.log(`\n\n/id/${id} | ${expected.name} ====================================================================`)
        
        evalAttr(id, 'name',                name,                expected.name)
        evalAttr(id, 'alt_name',            alt_name,            expected.alt_name)
        evalAttr(id, 'grade',               grade,               expected.grade)
        evalAttr(id, 'icon',                icon,                expected.icon)
        evalAttr(id, 'stats',               stats,               expected.stats)
        evalAttr(id, 'weight',              weight,              expected.weight)
        evalAttr(id, 'type',                type,                expected.type)
        evalAttr(id, 'detailed_type',       detailed_type,       expected.detailed_type)
        evalAttr(id, 'prices',              prices,              expected.prices)
        evalAttr(id, 'item_effects',        item_effects,        expected.item_effects)
        evalAttr(id, 'enhancement_effects', enhancement_effects, expected.enhancement_effects)
        evalAttr(id, 'description',         description,         expected.description)
    })
}

evalItem('https://bdocodex.com/us/item/715001/', 715001, {
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
})

evalItem('https://bdocodex.com/us/item/11017/', 11017, {
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
})

evalItem('https://bdocodex.com/us/item/4267/', 4267, {
    name: 'Black Gold Ingot',
    alt_name: '흑금 주괴',
    grade: '0',
    icon: '/items/new_icon/03_etc/07_productmaterial/00004267.png',
    stats: {
        damage: null,
        defense: null,
        accuracy: null,
        evasion: null,
        dreduction: null,
    },
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
})

evalItem('https://bdocodex.com/us/item/5467/', 5467, {
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
    description: 'A Farming product that can be employed to modify other materials using Alchemy.'
})
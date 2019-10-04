module.exports = [

{
    id:            703542,
    name:          `Arsha's Longbow (Accuracy)`,
    grade:         3,
    icon:          `/items/new_icon/06_pc_equipitem/00_common/01_weapon/00010214.png`,
    type:          `Equipment`,
    weight:        `0.10 LT`,
    description:   `Arena of Arsha Exclusive Longbow.`,
    p_transaction: false,
    prices:        { buy: `1`, sell: null, repair: `0` },
    effects: {
        item:          [
            `Extra Damage to All Species +19`,
            `Attack Speed +3 Level`,
            `All Accuracy +16`,
            `Ignore All Resistance +20%`
        ],
    },
    durability:      100,
    exclusive:       ['Ranger'],
    stats: {
        damage:        `114 ~ 118`,
        defense:       `0`,
        accuracy:      `192`,
        evasion:       `0`,
        dreduction:    `0`
    },
},

{
    id:            10213,
    name:          `Bares Longbow`,
    grade:         1,
    icon:          `/items/new_icon/06_pc_equipitem/00_common/01_weapon/00010213.png`,
    type:          `Equipment`,
    weight:        `6.65 LT`,
    description:   `A longbow possessed with a hatred for all living things.`,
    p_transaction: false,
    prices:        { buy: `82,000`, sell: `16,400`, repair: `8,200` },
    effects: {
        item:          [
            `Extra Damage to All Species +5`
        ],
        enhanc:        [
            `Extra AP against monsters up (enhancement level PRI or up)`,
            `All AP Up`,
            `All Accuracy Up`,
            `Extra Damage to All Species Up`
        ]
    },
    durability:      100,
    exclusive:       ['Ranger'],
    stats: {
        damage:        `11 ~ 15`,
        defense:       `0`,
        accuracy:      `0`,
        evasion:       `0`,
        dreduction:    `0`
    },
},

{
    id:            10317,
    name:          `Ultimate Parrying Dagger`,
    grade:         3,
    icon:          `/items/new_icon/06_pc_equipitem/00_common/08_subweapon/00010305.png`,
    type:          `Equipment`,
    weight:        `4.20 LT`,
    description:   `Gear at its maximum potential.`,
    p_transaction: false,
    prices:        { buy: `128,000`, sell: `25,600`, repair: `12,800` },
    effects: {
        item:          [
            `Max HP+100`
        ],
        extra:         [
            `All Special Attack Extra Damage +10%`
        ],
        enhanc:        [
            `Extra AP against monsters up (enhancement level PRI or up)`,
            `All Evasion Up`
        ]
    },
    durability:      100,
    exclusive:       ['Ranger', 'Wizard', 'Witch'],
    stats: {
        damage:        `3 ~ 3`,
        defense:       `0`,
        accuracy:      `0`,
        evasion:       `3 (+9)`,
        dreduction:    `1`
    },
},

{
    id:            10340,
    name:          `Kutum Dagger`,
    grade:         3,
    icon:          `/items/new_icon/06_pc_equipitem/00_common/08_subweapon/00010340.png`,
    type:          `Equipment`,
    weight:        `5.00 LT`,
    description:   `A dagger made with Ancient Kutum's melted core. It exudes Kutum's fiery energy.`,
    p_transaction: false,
    prices:        { buy: `125,000,000`, sell: `750,000`, repair: `50,000` },
    effects: {
        item:          [
            `Extra AP against Monsters +5`,
            `Ignore All Resistance +10%`
        ],
        enhanc:        [
            `Extra AP against Monsters`,
            `All AP Up`,
            `All DP`,
            `All Accuracy Up`
        ]
    },
    durability:      100,
    exclusive:       ['Ranger', 'Wizard', 'Witch'],
    stats: {
        damage:        `4 ~ 6`,
        defense:       `0`,
        accuracy:      `1`,
        evasion:       `2 (+6)`,
        dreduction:    `2`
    },
},

{
    id:            550023,
    name:          `Ultimate Sundo Kerispear`,
    grade:         3,
    icon:          `/items/new_icon/06_pc_equipitem/00_common/01_weapon/00014773.png`,
    type:          `Equipment`,
    weight:        `10.00 LT`,
    description:   `Gear at its maximum potential.`,
    p_transaction: false,
    prices:        { buy: `120,000`, sell: `16,400`, repair: `12,000` },
    effects: {
        item:          [
            `Extra Damage to All Species +5`
        ],
        enhanc:        [
            `All AP Up`,
            `Extra Damage to All Species Up`
        ]
    },
    durability:      100,
    exclusive:       ['Maehwa'],
    stats: {
        damage:        `13 ~ 22`,
        defense:       `0`,
        accuracy:      `0`,
        evasion:       `0`,
        dreduction:    `0`
    },
},

{
    id:            703650,
    name:          `Arsha's Helmet (Evasion)`,
    grade:         3,
    icon:          `/items/new_icon/06_pc_equipitem/00_common/13_hel/00010937.png`,
    type:          `Equipment`,
    weight:        `0.10 LT`,
    description:   `Arena of Arsha Exclusive Helmet.`,
    p_transaction: false,
    prices:        { buy: `1`, sell: null, repair: `0` },
    effects: {
        item:          [
            `Max HP+100`,
            `HP Recovery+10`
        ],
        '2_set':       [
            `All Evasion +5`
        ],
    },
    durability:      100,
    exclusive:       undefined,
    stats: {
        damage:        `0`,
        defense:       `73`,
        accuracy:      `0`,
        evasion:       `25 (+119)`,
        dreduction:    `48 (+4)`
    },
},

]
module.exports = [

    {
        id:            703542,
        name:          `Arco Longo de Arsha(Precisão)`,
        grade:         3,
        icon:          `/items/new_icon/06_pc_equipitem/00_common/01_weapon/00010214.png`,
        type:          `Equipamento`,
        weight:        `0.10 LT`,
        description:   `Arco Longo de uso geral na Lança de Arsha.`,
        p_transaction: false,
        prices:        { buy: `1`, sell: null, repair: `0` },
        effects: {
            item:          [
                `Dano Adicional contra Todas Raças +19`,
                `Velocidade de Ataque +3`,
                `Precisão Total +16`,
                `Ignorar Todas as Resistências +20%`
            ],
        },
        durability:      100,
        exclusive:       ['Caçadora'],
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
        name:          `Arco Longo Bares`,
        grade:         1,
        icon:          `/items/new_icon/06_pc_equipitem/00_common/01_weapon/00010213.png`,
        type:          `Equipamento`,
        weight:        `6.65 LT`,
        description:   `Um Arco Longo possuído por um ódio contra todas as criaturas vivas.`,
        p_transaction: false,
        prices:        { buy: `82,000`, sell: `16,400`, repair: `8,200` },
        effects: {
            item:          [
                `Dano Adicional contra Todas Raças +5`
            ],
            enhanc:        [
                `Aumento de Dano Adicional contra Monstros (Acima de Nível de Aprimoramento PRI)`,
                `Aumento de Todos Ataques`,
                `Aumento Precisão Total`,
                `Aumento de Dano Adicional contra Todas Raças`
            ]
        },
        durability:      100,
        exclusive:       ['Caçadora'],
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
        name:          `Adaga Aparadora Suprema`,
        grade:         3,
        icon:          `/items/new_icon/06_pc_equipitem/00_common/08_subweapon/00010305.png`,
        type:          `Equipamento`,
        weight:        `4.20 LT`,
        description:   `Adaga Aparadora levada ao seu potencial máximo.`,
        p_transaction: false,
        prices:        { buy: `128,000`, sell: `25,600`, repair: `12,800` },
        effects: {
            // item: [`HP Máxima +100`]
            item:          [
                `+100`
            ],
            extra:         [
                `Dano Adicional a Todos os Ataques Especiais +10%`
            ],
            enhanc:        [
                `Aumento de Dano Adicional contra Monstros (Acima de Nível de Aprimoramento PRI)`,
                `Aumento de Evasão Total`
            ]
        },
        durability:      100,
        exclusive:       ['Caçadora', 'Mago', 'Bruxa'],
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
        name:          `Adaga Kutum`,
        grade:         3,
        icon:          `/items/new_icon/06_pc_equipitem/00_common/08_subweapon/00010340.png`,
        type:          `Equipamento`,
        weight:        `5.00 LT`,
        description:   `Uma Adaga feita com o núcleo derretido de Kutum Ancestral. Ela exala uma grande energia ardente.`,
        p_transaction: false,
        prices:        { buy: `125,000,000`, sell: `750,000`, repair: `50,000` },
        effects: {
            item:          [
                `Dano adicional em monstros +5`,
                `Ignorar Todas as Resistências +10%`
            ],
            enhanc:        [
                `Dano adicional em monstros`,
                `Aumento de Todos Ataques`,
                `Defesa Total`,
                `Aumento Precisão Total`
            ]
        },
        durability:      100,
        exclusive:       ['Caçadora', 'Mago', 'Bruxa'],
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
        name:          `Lança de Jade da Liderança Suprema`,
        grade:         3,
        icon:          `/items/new_icon/06_pc_equipitem/00_common/01_weapon/00014773.png`,
        type:          `Equipamento`,
        weight:        `10.00 LT`,
        description:   `Lança de Jade da Liderança levada ao seu potencial máximo`,
        p_transaction: false,
        prices:        { buy: `120,000`, sell: `16,400`, repair: `12,000` },
        effects: {
            item:          [
                `Dano Adicional contra Todas Raças +5`
            ],
            enhanc:        [
                `Aumento de Todos Ataques`,
                `Aumento de Dano Adicional contra Todas Raças`
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
        name:          `Elmo de Arsha(Evasão)`,
        grade:         3,
        icon:          `/items/new_icon/06_pc_equipitem/00_common/13_hel/00010937.png`,
        type:          `Equipamento`,
        weight:        `0.10 LT`,
        description:   `Elmo de uso geral na Lança de Arsha.`,
        p_transaction: false,
        prices:        { buy: `1`, sell: null, repair: `0` },
        effects: {
            /*
                item: [
                    `HP Máxima +100`,
                    `Recupera +10 HP`
                ],
                '2_set': [
                    `Evasão Total +5%`
                ]
            */
            item:          [
                `+100`,
                `+10 HP`
            ],
            '2_set':       [
                `+5%`
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
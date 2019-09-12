const { Item } = require('../src')
const TestUtil = require('./lib')

const test = (id, obj, langs = ['en', 'pt']) => {
    new Item(id, langs).scrape().then(data => {
        TestUtil.eval(`/id/${id}/effects`, obj, data.effects)
    })
}

test(11074, {
    en: {
        item: [
            'Max HP+200'
        ],
    },
    pt: {
        item: [
            'HP Máxima +200'
        ],
    }
})

test(715003, {
    en: {
        item: [
            'Extra Damage to All Species +10',
            'Attack Speed +3 Level'
        ],
        enhanc: [
            'Extra AP against monsters up (enhancement level PRI or up)',
            'Extra Damage to All Species Up',
            'All AP Up',
            'All Accuracy Up'
        ]
    },
    pt: {
        item: [
            'Dano Adicional contra Todas Raças +10',
            'Velocidade de Ataque +3'
        ],
        enhanc: [
            'Aumento de Dano Adicional contra Monstros (Acima de Nível de Aprimoramento PRI)',
            'Aumento de Dano Adicional contra Todas Raças',
            'Aumento de Todos Ataques',
            'Aumento Precisão Total'
        ]
    }
})

test(10838, {
    en: {
        item: [
            'Max HP+50'
        ],
        set_2: [
            'Max HP+100'
        ],
        set_3: [
            'Attack Speed +2 Level',
            'Casting Speed +2 Level',
        ]
    },
    pt: {
        item: [
            'HP Máxima +50'
        ],
        set_2: [
            'HP Máxima +100'
        ],
        set_3: [
            'Velocidade de Ataque +2',
            'Velocidade de Conjuração +2',
        ]
    }
})

test(715005, {
    en: {
        item: [
            'Extra Damage to All Species +10',
            'Casting Speed +3 Level',
        ],
        enhanc: [
            'Extra AP against monsters up (enhancement level PRI or up)',
            'Extra Damage to All Species Up',
            'All AP Up',
            'All Accuracy Up'
        ]
    },
    pt: {
        item: [
            'Dano Adicional contra Todas Raças +10',
            'Velocidade de Conjuração +3',
        ],
        enhanc: [
            'Aumento de Dano Adicional contra Monstros (Acima de Nível de Aprimoramento PRI)',
            'Aumento de Dano Adicional contra Todas Raças',
            'Aumento de Todos Ataques',
            'Aumento Precisão Total'
        ]
    }
})

test(10427, {
    en: {
        item: [
            'Additional Damage to Demihumans +10',
        ],
        add: [
            'Casting Speed +1 Level',
            'Critical Hit +1',
        ],
        enhanc: [
            'Extra AP against monsters up (enhancement level PRI or up)',
            'All AP Up',
            'All Accuracy Up',
            'Extra Damage to Demihumans Up',
        ]
    },
    pt: {
        item: [
            'Dano Adicional contra Semibesta +10',
        ],
        add: [
            'Velocidade de Conjuração +1',
            'Potencial de Acerto Crítico +1',
        ],
        enhanc: [
            'Aumento de Dano Adicional contra Monstros (Acima de Nível de Aprimoramento PRI)',
            'Aumento de Todos Ataques',
            'Aumento Precisão Total',
            'Aumento de Dano Adicional contra Semibesta',
        ]
    }
})

test(10478, {
    en: {
        item: [
            'Extra Damage to All Species +19',
            'Critical Hit +5'
        ],
    },
    pt: {
        item: [
            'Dano Adicional contra Todas Raças +19',
            'Potencial de Acerto Crítico +5'
        ],
    },
})

test(705076, {
    en: {
        item: [
            'Hunting Mastery +4',
            'Movement Speed+1 Level',
        ],
        enhanc: [
            'All DP Up',
            'Hunting Mastery Up',
        ]
    },
    pt: {
        item: [
            'Proficiência em Caça +4',
            'Velocidade de Movimento +1',
        ],
        enhanc: [
            'Aumento a Defesa Total',
            'Aumento de Proficiência em Caça',
        ]
    }
})
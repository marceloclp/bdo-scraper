const { Item } = require('../src')
const TestUtil = require('./lib')

const test = (id, obj, langs = ['en', 'pt']) => {
    new Item(id, langs).scrape().then(data => {
        TestUtil.eval(`/id/${id}/exclusive`, obj, data.exclusive)
    })
}

test(715001, {
    en: ['Warrior', 'Valkyrie'],
    pt: ['Guerreiro', 'Valquíria'],
})

test(14732, {
    en: ['Ranger'],
    pt: ['Caçadora'],
})

test(701085, {
    en: ['Sorceress'],
    pt: ['Feiticeira'],
})

test(676, undefined)

test(11649, undefined)

test(703508, {
    en: ['Ranger', 'Wizard', 'Witch'],
    pt: ['Caçadora', 'Mago', 'Bruxa'],
})
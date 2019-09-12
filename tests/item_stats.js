const { Item } = require('../src')
const TestUtil = require('./lib')

const test = (id, obj, langs = ['en', 'pt']) => {
    new Item(id, langs).scrape().then(data => {
        TestUtil.eval(`/id/${id}/stats`, obj, data.stats)
    })
}

test(715001, {
    damage: '21 ~ 27',
    defense: '0',
    accuracy: '20',
    evasion: '0',
    dreduction: '0'
})

test(4267, undefined)

test(13138, {
    damage: '6 ~ 8',
    defense: '0',
    accuracy: '0',
    evasion: '0',
    dreduction: '0'
})

test(13114, null)

test(4901, undefined)

test(639, undefined)

test(16812, null)

test(560003, null)

test(16832, null)

test(702005, {
    damage: '11 ~ 11',
    defense: '0',
    accuracy: '6',
    evasion: '0',
    dreduction: '0'
})

test(45221, null)
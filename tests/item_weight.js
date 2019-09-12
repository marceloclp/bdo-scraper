const { Item } = require('../src')
const TestUtil = require('./lib')

const test = (id, obj, langs = ['en', 'pt']) => {
    new Item(id, langs).scrape().then(data => {
        TestUtil.eval(`/id/${id}/weight`, obj, data.weight)
    })
}

test(715001, '13.50 LT')
test(4267, '0.30 LT')
test(4483, '0.30 LT')
test(4067, '0.30 LT')
test(13138, '6.50 LT')
test(13114, '6.65 LT')
test(4901, '0.10 LT')
test(639, '0.75 LT')
test(49009, '0.00 LT')
test(16812, '1.00 LT')
test(46066, '0.00 LT')
test(560003, '0.01 LT')
test(16004, '0.35 LT')
test(6222, '0.10 LT')
test(16832, '1.00 LT')
test(702005, '0.17 LT')
test(45221, '0.05 LT')
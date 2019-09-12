const { Item } = require('../src')
const TestUtil = require('./lib')

const test = (id, obj, langs = ['en', 'pt']) => {
    new Item(id, langs).scrape().then(data => {
        TestUtil.eval(`/id/${id}/grade`, obj, data.grade)
    })
}

test(715001, 4)
test(4483, 0)
test(4067, 0)
test(13138, 3)
test(13114, 2)
test(4901, 0)
test(639, 1)
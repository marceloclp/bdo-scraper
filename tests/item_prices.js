const { Item } = require('../src')
const TestUtil = require('./lib')

const test = (id, obj, langs = ['en', 'pt']) => {
    new Item(id, langs).scrape().then(data => {
        TestUtil.eval(`/id/${id}/prices`, obj, data.prices)
    })
}

test(715001, { buy: '285,000,000', sell: '2,250,000', repair: '100,000' })
test(4483,   { buy: '4,920', sell: '1,640', repair: null })
test(4067,   { buy: '60,000', sell: '2,400', repair: null })
test(13138,  { buy: '125,000,000', sell: '750,000', repair: '50,000' })
test(13114,  { buy: '64,640', sell: '12,928', repair: '6,464' })
test(4901,   { buy: '8,250', sell: '330', repair: null })
test(639,    { buy: '1,782', sell: '594', repair: null })
test(46030,  { buy: '0', sell: null, repair: null })
test(16128,  { buy: '18,000', sell: '300', repair: '0' })
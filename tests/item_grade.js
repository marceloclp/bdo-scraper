const { Item } = require('../src')
const TestUtil = require('./lib')
const toString = require('stringify-object')

const evalGrade = (id, obj1, obj2) => {
    if (!TestUtil.eval(obj1, obj2)) {
        console.log([
            `id/${id}/name`,
            toString(obj1),
            toString(obj2),
            '',
        ].join('\n'))
    }
}

const test = (id, obj, langs = ['pt', 'en']) => {
    new Item(id, langs).scrape().then(data => {
        evalGrade(id, obj, data.grade)
    })
}

test(715001, 4)
test(4483, 0)
test(4067, 0)
test(13138, 3)
test(13114, 2)
test(4901, 0)
test(639, 1)
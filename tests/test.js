const { Item } = require('../src/scrapers')
const isEqual  = require('lodash').isEqual

const x = new Item(9213, ['pt', 'en'])

//console.log(x.parseUris())
//console.log(x.getName())

x.scrape().then(item => {
    console.log(item)
    //console.log(res)

    //console.log(item.getName())
})

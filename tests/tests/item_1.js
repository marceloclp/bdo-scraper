// https://bdocodex.com/us/item/9213/
// Beer

const { Item } = require('../../src/scrapers')

new Item(9213, ['en', 'pt']).scrape().then(data => console.log(data))
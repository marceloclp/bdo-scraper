// https://bdocodex.com/us/item/9213/
// Beer

const { Item } = require('../../src/scrapers')

//new Item(9213, ['pt', 'en']).scrape().then(data => console.log(data))
new Item(9213, ['en']).scrape().then(data => console.log(data))
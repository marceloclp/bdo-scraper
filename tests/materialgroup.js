const { Item, Materialgroup, Recipe } = require('../src')
const TestUtil = require('./lib')


new Recipe(1887, true, ['en']).scrape().then(data => {
    console.log(data)
}).catch(err => console.log("Error: ", err))

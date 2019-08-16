const BDOScraper = require('./../src')
const isEqual    = require('lodash').isEqual

BDOScraper.load('https://bdocodex.com/us/item/9213/').then(scraper => {
//BDOScraper.load('https://bdocodex.com/pt/recipe/122/').then(scraper => {
    scraper.getRecipesFromItem().then(recipes => console.log(recipes))
    //scraper.getRecipesFromItem()
    //console.log(scraper.getRecipeExp())
})
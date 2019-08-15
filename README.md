# BDO Scraper

BDOScraper is a web scraper developed for [BDOCodex](http://bdocodex.com/), and it should work for [BDDatabase](https://bddatabase.net/) given the similarities between them. Currently supports the english and portuguese languages.
### Installation

```bash
npm install bdo-scraper
```

### Usage

Simply import the package and load one or more URIs. Use then() to treat the promise and the arg will be the scraper. So get scraping :)

```javascript
const BDOScraper = require('bdo-scraper')

// Load a single item.
BDOScraper.load('https://bdocodex.com/us/item/5467/').then(item => {
    // 'Special Dry Mane Grass'
    console.log(item.getName())
})

// Or load multiple items at once. This will use Promise.all() to wait until all promises are resolved, and then return a new promise. So use it carefully.
BDOScraper.loadMultiple([
    'https://bdocodex.com/us/item/5467/',
    'https://bdocodex.com/us/item/14486/',
]).then(items => {
    // 'Special Dry Mane Grass'
    // 'Offin Tett's Radiant Staff'
    items.forEach(item => console.log(item.getName()))
})
```

### Methods

For all the following methods, simply load one or more URIs and call the method from the received item.
```javascript
BDOScraper.load('https://bdocodex.com/us/item/14486/').then(item => {
    item.someMethod() // call your method here
})
```

##### **getName()**
Returns the name of the item if it exists, otherwise returns null.
```javascript
item.getName() // => 'Offin Tett's Radiant Staff'
```

##### **getAltName()**
BDOCodex displays the korean name under the selected language name. This returns the korean name if it exists, otherwise returns null.
```javascript
item.getAltName() // => '오핀 테트의 빛 지팡이'
```

##### **getGrade()**
Returns the grade (color) of the item as a number (but its type is still a string).
```javascript
item.getGrade() // => '3'
```

##### **getIcon()**
Returns the src for the item's icon if available, otherwise returns null. You will still need to parse the url depending on the website you are scraping.
```javascript
item.getIcon() // => '/items/new_icon/06_pc_equipitem/00_common/01_weapon/00014486.png'
```

##### **getStats()**
Returns an object containing the item stats if available. If one or all stats are not available, returns the missing properties as null.
```javascript
item.getStats()
/* => {
    damage: '22 ~ 24',
    defense: '0',
    accuracy: '7',
    evasion: '0',
    dreduction: '0'
}*/
```

##### **getWeight()**
Returns the weight of the item as a string if available, otherwise returns null.
```javascript
item.getWeight() // => '13.50 LT'
```

##### **getType()**
Returns the type displayed ingame if available, otherwise returns null.
```javascript
item.getType() // => 'Equipment'
```

##### **getDetailedType()**
Returns an array detailing the item type. Used by BDOCodex and BDDatabase for some internal logic.
```javascript
item.getDetailedType() // => ['06_pc_equipitem', '00_common', '01_weapon']
```

##### **getPrices()**
Returns an object containing the buy, sell and repair prices. If one or more prices are not available, return the property as null.
```javascript
item.getPrices() // => { buy: '95,000,000', sell: '750,000', repair: '43,740' }
```

##### **getItemEffects()**
Returns an array containing the item effects if it exists, otherwise returns an empty array.
```javascript
item.getItemEffects()
/* => [
    'Extra Damage to All Species +10',
    'Critical Hit +2',
    'Casting Speed +2 Level'
]*/
```

##### **getEnhancementEffects()**
Returns an array containing the enhancement effects if it exists, otherwise returns an empty array.
```javascript
item.getEnhancementEffects()
/* => [
    'Extra AP against monsters up (enhancement level PRI or up)',
    'Extra Damage to All Species Up',
    'All AP Up',
    'All Accuracy Up'
]*/
```

##### **getDescription()**
Returns the item description if available, otherwise returns null.
```javascript
item.getDescription() // => 'Staff containing a condensed form of Offin Tett's light energy. A strong force is felt from the condensed radiant energy.'
```
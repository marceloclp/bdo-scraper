# BDO Scraper
BDOScraper is a web scraper developed for [BDDatabase](https://bddatabase.net/). It used to support [BDOCodex](http://bdocodex.com/) previously. Currently supports the english language, and portuguese partially.

- [BDO Scraper](#bdo-scraper)
  - [What changed from v1 to v2](#what-changed-from-v1-to-v2)
  - [Bug Report](#bug-report)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Scraping Pages](#scraping-pages)
    - [Searches](#searches)

## What changed from v1 to v2
- **v2 is not compatible with v1**
- Dropped support for BDOCodex
- Simplified API
- Added support for querying recipes
- Searches are now supported

## Bug Report
If you find a bug, such as an item with incorrect data (different from what the web page shows), please open an issue.

## Installation
```bash
npm install bdo-scraper
```

## Usage
**You can read more about the project by reading the [Docs](https://github.com/marceloclp/bdo-scraper/wiki).**

### Scraping Pages
Scraping a page is as simple as importing the correct entity and calling the function.

```javascript
const { Item, Recipe, MaterialGroup, LANGS } = require('bdo-scraper')

// Using ES7 async/await syntax.
async () => {
    // Returns the data for the item with id 9233.
    const itemData = await Item(9213)

    // Or, if you need it in another language, pass a different flag.
    const itemDataInPortuguese = await Item(9213, LANGS.pt)

    // You can get different types of entities by using a different Scraper.
    const recipeData = await Recipe(122)

    console.log(itemData) // Output below
}
```

This would return an object like:

```json
{
    "id":            9213,
    "name":          "Beer",
    "grade":         1,
    "icon":          "/items/new_icon/03_etc/07_productmaterial/00009213.png",
    "type":          "Special Items",
    "weight":        "0.10 LT",
    "description":   "A mild alcoholic drink brewed from cereal grains",
    "p_transaction": true,
    "prices":        { "buy": "2,150", "sell": "86", "repair": null },
    "effects": [
        "Worker Stamina Recovery +2",
        "(Use through the Worker Menu on the World Map)."
    ],
    "lifespan":      null,
    "duration":      null,
    "cooldown":      null,
    ...
}
```

### Searches

BDOScraper also supports searches now.

```javascript
const { Search, LANGS } = require('bdo-scraper')

async () => {
    // Returns at most 10 of the most popular results that match the search term.
    const dataPopular = await Search('beer')

    // When passing `false` to the third parameter, all results that match the search term will be returned.
    const dataAll = await Search('beer', LANGS.en, false)

    console.log(dataAll) // Output below
}
```

This would return an object like:

```json
[
  {
    "name":  "Beer",
    "id":    9213,
    "grade": 1,
    "type":  "Item",
    "link":  "/us/item/9213/",
    "icon":  "/items/new_icon/03_etc/07_productmaterial/00009213.png"
  },
  {
    "name":  "Cold Draft Beer",
    "id":    9283,
    "grade": 2,
    "type":  "Item",
    "link":  "/us/item/9283/",
    "icon":  "/items/new_icon/03_etc/07_productmaterial/00009283.png"
  },
  ...
]
```
# BDO Scraper
BDOScraper is a web scraper developed for [BDDatabase](https://bddatabase.net/). It used to support [BDOCodex](http://bdocodex.com/) previously. Currently supports the english language, and portuguese partially.

## What changed from v1 to v2
- **v2 is not compatible with v1**
- Dropped support for BDOCodex
- Simplified API
- Added support for querying recipes

## Bug Report
If you find a bug, such as an item with incorrect data (different from what the web page shows), please open an issue.

## Installation
```bash
npm install bdo-scraper
```

## Usage
```javascript
const { Item, Recipe, LANGS } = require('bdo-scraper')

async () => {
    const data = await new Item(/* id */ 9233, /* lang */ LANGS.en)
    console.log(data)
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
    "recipes": [
        {
            "id":        122,
            "icon":      "/items/new_icon/03_etc/07_productmaterial/00009213.png",
            "name":      "Beer",
            "skill_lvl": "Beginner 1",
            "exp":       400,
            "type":      "Cooking",
            "materials": [
                {
                    "link":   "/us/materialgroup/1/",
                    "icon":   "/items/new_icon/03_etc/07_productmaterial/00007005.png",
                    "amount": 5,
                    "id":     1,
                },
                ...
            ],
            "results": [
                {
                    "link":   "/us/item/9213/",
                    "icon":   "/items/new_icon/03_etc/07_productmaterial/00009213.png",
                    "amount": 1,
                    "id":     9213,
                },
                ...
            ]
        },
        ...
    ],
    "used_in_recipe": [
        {
            "id":        169,
            "icon":      "/items/new_icon/03_etc/07_productmaterial/00009601.png",
            "name":      "Balenos Meal",
            "skill_lvl": "Skilled 6",
            "exp":       1600,
            "type":      "Cooking",
            "materials": [
                {
                    "link":   "/us/item/9203/",
                    "icon":   "/items/new_icon/03_etc/07_productmaterial/00009203.png",
                    "amount": 1,
                    "id":     9203,
                },
                ...
            ],
            "results": [
                {
                    "link":   "/us/item/9601/",
                    "icon":   "/items/new_icon/03_etc/07_productmaterial/00009601.png",
                    "amount": 1,
                    "id":     9601,
                },
                ...
            ]
        }
    ]
}
```
Recipes require extra requests, and they can be disabled by passing `false` to the scraper, like this:
```javascript
await new Item(9233, LANGS.US, false)
```
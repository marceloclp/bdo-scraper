const { Item, Recipe, LANGS } = require(`../src/index`)
const { test } = require('./lib')

const consumables_en  = require('./tests/items_consumables_en')
const equipments_en   = require('./tests/items_equipments_en')
const recipes_en      = require('./tests/recipes_en')
const processables_en = require('./tests/items_processables_en')

test(Item,   LANGS.en, consumables_en)
test(Item,   LANGS.en, equipments_en)
test(Recipe, LANGS.en, recipes_en)
test(Item,   LANGS.en, processables_en)
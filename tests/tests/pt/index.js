const { Item, Recipe, LANGS } = require('../../../src')
const { test } = require('../../lib')

test(Item,   LANGS.pt, require('./items_consumables'))
test(Item,   LANGS.pt, require('./items_equipments'))
test(Item,   LANGS.pt, require('./items_processables'))
test(Recipe, LANGS.pt, require('./recipes'))
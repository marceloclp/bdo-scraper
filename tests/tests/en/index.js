const { Item, Recipe, MaterialGroup, LANGS } = require('../../../src')
const { test } = require('../../lib')

test(Item,   LANGS.en, require('./items_consumables'))
test(Item,   LANGS.en, require('./items_equipments'))
test(Item,   LANGS.en, require('./items_processables'))
test(Recipe, LANGS.en, require('./recipes'))
test(MaterialGroup, LANGS.en, require('./materialgroups'))
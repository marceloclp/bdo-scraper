const { Item, Recipe, LANGS } = require('../../../src')
const { test } = require('../../lib')

test(Item,   LANGS.en, require('./items_consumables_en'))
test(Item,   LANGS.en, require('./items_equipments_en'))
test(Item,   LANGS.en, require('./items_processables_en'))
test(Recipe, LANGS.en, require('./recipes_en'))
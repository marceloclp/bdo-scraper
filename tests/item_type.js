const { Item } = require('../src')
const TestUtil = require('./lib')

const test = (id, obj, langs = ['en', 'pt']) => {
    new Item(id, langs).scrape().then(data => {
        TestUtil.eval(`/id/${id}/type`, obj, data.type)
    })
}

test(715001, {
    en: `Equipment`,
    pt: `Equipamento`
})

test(4267, {
    en: `Crafting Materials`,
    pt: `Material necessário`
})

test(4483, {
    en: `Crafting Materials`,
    pt: `Material necessário`
})

test(4067, {
    en: `Crafting Materials`,
    pt: `Material necessário`
})

test(13138, {
    en: `Equipment`,
    pt: `Equipamento`
})

test(13114, {
    en: `Equipment`,
    pt: `Equipamento`
})

test(4901, {
    en: `Crafting Materials`,
    pt: `Material necessário`
})

test(639, {
    en: `Consumable`,
    pt: `Consumível`
})

test(49009, {
    en: `License`,
    pt: `Registro`
})

test(16812, {
    en: `Equipment`,
    pt: `Equipamento`
})

test(46066, {
    en: `General`,
    pt: `Geral`
})

test(560003, {
    en: `Equipment`,
    pt: `Equipamento`
})

test(16004, {
    en: `General`,
    pt: `Geral`
})

test(6222, {
    en: `Crafting Materials`,
    pt: `Material necessário`
})

test(16832, {
    en: `Equipment`,
    pt: `Equipamento`
})

test(702005, {
    en: `Equipment`,
    pt: `Equipamento`
})

test(45221, {
    en: `Equipment`,
    pt: `Equipamento`
})

test(18485, {
    en: `Special Items`,
    pt: `Item Especial`
})

test(54032, {
    en: `Crafting Materials`,
    pt: `Material necessário`
})

test(619, {
    en: `Consumable`,
    pt: `Consumível`
})
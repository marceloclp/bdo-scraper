const { Item } = require('../src')
const TestUtil = require('./lib')

const test = (id, obj, langs = ['en', 'pt']) => {
    new Item(id, langs).scrape().then(data => {
        TestUtil.eval(`/id/${id}/name`, obj, data.name)
    })
}

test(715001, {
    en: `Blackstar Longsword`,
    pt: `Espada Longa da Blackstar`
})

test(4267, {
    en: `Black Gold Ingot`,
    pt: `Lingote de Nielo`
})

test(4483, {
    en: `Blue Crystal`,
    pt: `Cristal Azul`
})

test(4067, {
    en: `Bronze Ingot`,
    pt: `Lingote de Bronze`
})

test(13138, {
    en: `Nouver Horn Bow`,
    pt: `Arco de Chifre Nouver`
})

test(13114, {
    en: `White Warrior Horn Bow of Crimson Flame`,
    pt: `Arco de Guerreiro de Chifre Branco da Chama Carmesim`
})

test(4901, {
    en: `Black Stone Powder`,
    pt: `Pó de Pedra Negra`
})

test(639, {
    en: `[Party] Elixir of Will`,
    pt: `[Grupo] Elixir da Vontade`
})

test(49009, {
    en: `Ship License: Epheria Frigate`,
    pt: `Registro de Navio: Fragata de Ephéria`
})

test(16812, {
    en: `Lucky Shining Fluid Collector`,
    pt: `Coletor de Fluidos Brilhante de Aço da Sorte`,
})

test(46066, {
    en: `[Olvian Dye] True Aqua`,
    pt: `[Corante de Olvia] Aqua Verdadeira`
})

test(560003, {
    en: `[Archer] Gierach Gloves`,
    pt: `[Arqueiro] Luvas Gardia`,
})

test(16004, {
    en: `Concentrated Magical Black Stone (Weapon)`,
    pt: `Pedra Negra de Magia Concentrada (Arma)`
})

test(6222, {
    en: `Cobra Blood`,
    pt: `Sangue de Cobra`
})

test(16832, {
    en: `Magic Pickaxe`,
    pt: `Picareta Mágica`
})

test(702005, {
    en: `Crimson Shadow Ring`,
    pt: `Anel Sombra Vermelha`
})

test(45221, {
    en: `Resplendent Alchemy Stone of Destruction`,
    pt: `Pedra Resplandecente da Alquimia da Destruição`
})
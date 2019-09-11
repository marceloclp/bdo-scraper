const { Item } = require('../src')
const TestUtil = require('./lib')
const toString = require('stringify-object')

const evalDescription = (id, obj1, obj2) => {
    if (!TestUtil.eval(obj1, obj2)) {
        console.log([
            `id/${id}`,
            toString(obj1),
            toString(obj2),
            '',
        ].join('\n'))
    }
}

const test = (id, obj, langs = ['pt', 'en']) => {
    new Item(id, langs).scrape().then(data => {
        evalDescription(id, obj, data.description)
    })
}

test(715001, {
    en: `A weapon made with the claw obtained by defeating the Incarnation of Corruption at Star's End. It is imbued with the power of the ancient Ator. Only Dorin Morgrim can forge this weapon.`,
    pt: `Espada Longa feita usando a garra obtida após derrotar a Encarnação da Injustiça no Túmulo da Estrela, e preenchida com energia do Atoru Ancestral. Esta arma é fabricada exclusivamente pelo Dorin Morgrim.`
})

test(4267, {
    en: `A gatherable natural ingredient that has been processed and may be used during crafting. It can be changed to a different form through alchemy or processing.`,
    pt: `Um recurso natural processado obtido através da Coleta e usado como material para Produção. Pode ser modificado usando Alquimia ou algum tipo de Processamento.`
})

test(4483, {
    en: `A gatherable natural ingredient that has been processed and may be used during crafting. It can be changed to a different form through alchemy or processing.`,
    pt: `Um recurso natural processado obtido através da Coleta e usado como material para Produção. Pode ser modificado usando Alquimia ou algum tipo de Processamento.`
})

test(4067, {
    en: `A gatherable natural ingredient that has been processed and may be used during crafting. It can be changed to a different form through alchemy or processing.`,
    pt: `Um recurso natural processado obtido através da Coleta e usado como material para Produção. Pode ser modificado usando Alquimia ou algum tipo de Processamento.`
})

test(13138, {
    en: `Nouver's spirit indwells this horn bow. Nouver's powerful aura is like a immovable mountain.`,
    pt: `Arco de Chifre com energia de Nouver. Pode-se sentir a enorme energia do dragão.`
})

test(13114, {
    en: `Gear possessing the energy of Crimson Flame.`,
    pt: `A energia da Chama Carmesim está contida neste Arco de Chifres Brancos do Guerreiro.`
})

test(4901, {
    en: `A basic ingredient used in Crafting.`,
    pt: `Um ingrediente básico usado na Produção.`
})

test(639, {
    en: `Elixir with a defensive function.`,
    pt: `Elixir com Efeito Defensivo`
})

test(49009, {
    en: `Proof of ownership of an Epheria Frigate, allowing you to retrieve it at a Wharf.`,
    pt: `Prova de propriedade 『 Fragata de Ephéria』 na marina da aldeia.`
})

test(16812, {
    en: `A gathering tool made for extracting animal blood or tree sap. It increases luck when gathering.`,
    pt: `Uma Ferramenta de Coleta usada para extrair sangue animal ou seiva. Aumenta a Sorte quando Coletando.`,
})

test(46066, {
    en: `An Olvian dye. It highlights the texture of cloth.`,
    pt: `Corante de Olvia. Conserva as texturas do tecido.`
})

test(560003, {
    en: null,
    pt: null,
})

test(16004, {
    en: `This item can be used to enhance gear through the Black Spirit.`,
    pt: `Equipamentos podem ser aprimorados através do Espírito Negro.`
})

test(6222, {
    en: `A natural resource obtained through Gathering that can be employed to modify other materials using Alchemy.`,
    pt: `Um recurso natural obtido através da Coleta que pode ser usado para modificar outros materiais através da Alquimia.`
})

test(16832, {
    en: `A gathering tool made for extracting ore and minerals from rock. It increases luck when gathering.`,
    pt: `Uma Ferramenta de Coleta usada para extrair minério e minerais de pedras. Aumenta a Sorte quando Coletando.`
})

test(702005, {
    en: `An Accessory used by an ancient conqueror. It is powerful even without Enhancement.`,
    pt: `Acessório usado por um conquistador no passado. É bastante poderoso mesmo sem poder aprimorá-lo.`
})

test(45221, {
    en: `Resplendent alchemy stone of destruction produced through alchemy.`,
    pt: `Pedra de Alquimia Resplandecente da Destruição feita por Alquimia.`
})
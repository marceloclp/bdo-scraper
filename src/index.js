const request = require('request-promise')
const cheerio = require('cheerio')
const Parser  = require('./Parser')
const { itemType, LANGS } = require('./enums')
const { MainController }  = require('./controller')

const Scraper = async (id, lang, type = LANGS.en, full_data_flag = true) => {
    if (isNaN(parseInt(id)))
        throw `id has to be a valid number.`
    if (typeof lang !== `string` || !Object.values(LANGS).includes(lang))
        throw `lang has to be one of ${Object.values(LANGS)}.`

    const $ = await load(id, lang, type)
    if (!$) return null

    return await buildResponse($, id, lang, type, full_data_flag)
}

const load = async (id, lang, type) => {
    const uri  = new MainController(id, lang, type).get()
    const html = await request(uri)
    const $    = cheerio.load(html)

    if ($(`#item_info_row`).children().length)
        return $
    return null
}

const buildResponse = async ($, id, lang, type, full_data_flag) => {
    const p   = new Parser($, lang, id)
    const res = {}

    if (full_data_flag) {
        const uriObjs = p.parseQueryObjs()
        const objs    = await Promise.all(uriObjs.map(e => request(e.uri)))
        objs.forEach((obj, i) => {
            res[uriObjs[i].key] = Parser.parseRecipeList(
                JSON.parse(obj.trim()).aaData
            )
        })
    }

    // Common to all entities.
    res.id    = id
    res.name  = p.getName()
    res.grade = p.getGrade()
    res.icon  = p.getIcon()
    res.type  = p.getType()

    switch(type) {
        case 'item':
            res.weight         = p.getWeight()
            res.description    = p.getDescription()
            res.p_transaction  = p.getPersonalTransaction()
            res.prices         = p.getPrices()
            break

        case 'recipe':
            res.materials      = p.getCraftingMaterials()
            res.results        = p.getCraftingResults()
            res.skill_lvl      = p.getSkillLvl()
            res.r_type         = p.getRecipeType()
            break

        case 'materialgroup':
            res.materials      = p.getMaterialgroup()
    }

    switch(itemType(lang, p.getType())) {
        case 'equipment':
            res.effects        = p.getEquipmentEffects()
            res.durability     = p.getDurability()
            res.exclusive      = p.getExclusive()
            res.stats          = p.getStats()
            break

        case 'special_items':
        case 'consumable':
            res.effects        = p.getConsumableEffects()
            res.lifespan       = p.getLifespan()
            res.duration       = p.getDuration()
            res.cooldown       = p.getCooldown()
            break
    }
    return res
}

module.exports = {
    LANGS,
    Item:          async (id, lang) => await Scraper(id, lang, 'item'),
    Recipe:        async (id, lang) => await Scraper(id, lang, 'recipe'),
    Materialgroup: async (id, lang) => await Scraper(id, lang, 'materialgroup'),
}
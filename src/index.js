const request = require('request-promise')
const cheerio = require('cheerio')
const Parser  = require('./Parser')
const Util    = require('./util')
const Enums   = require('./enums')
const Ctrls   = require('./controller')

const DEFAULT_LANG = Enums.LANGS.en

const Scraper = async (id, lang, type = DEFAULT_LANG, full_data_flag = true) => {
    if (isNaN(parseInt(id)))
        throw `id has to be a valid number.`
    if (typeof lang !== `string` || !Object.values(Enums.LANGS).includes(lang))
        throw `lang has to be one of ${Object.values(Enums.LANGS)}.`

    const $ = await load(id, lang, type)
    if (!$) return null

    return await buildResponse($, id, lang, type, full_data_flag)
}

const load = async (id, lang, type) => {
    const uri  = new Ctrls.MainController(id, lang, type).get()
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
        case Enums.TYPES.item:
            res.weight         = p.getWeight()
            res.description    = p.getDescription()
            res.p_transaction  = p.getPersonalTransaction()
            res.prices         = p.getPrices()
            break

        case Enums.TYPES.recipe:
            res.materials      = p.getCraftingMaterials()
            res.results        = p.getCraftingResults()
            res.skill_lvl      = p.getSkillLvl()
            res.r_type         = p.getRecipeType()
            break

        case Enums.TYPES.materialGroup:
            res.materials      = p.getMaterialGroup()
            res.icon           = res.materials[0].icon
            break
    }

    switch(Enums.ENTITY_TYPES[p.getType()]) {
        case Enums.ITEM_TYPES.equipment:
            res.effects        = p.getEquipmentEffects()
            res.durability     = p.getDurability()
            res.exclusive      = p.getExclusive()
            res.stats          = p.getStats()
            break

        case Enums.ITEM_TYPES.specialItems:
        case Enums.ITEM_TYPES.consumable:
            res.effects        = p.getConsumableEffects()
            res.lifespan       = p.getLifespan()
            res.duration       = p.getDuration()
            res.cooldown       = p.getCooldown()
            break
    }

    return res
}

const search = async (term, lang = DEFAULT_LANG, popularity_flag = true) => {
    const uri = new Ctrls.SearchController(lang, term).get(popularity_flag)
    const res = await request(uri)
    let payload

    if (popularity_flag) {
        payload = JSON.parse(res.trim()).map(e => ({
            name:  e.name,
            id:    parseInt(e.value),
            grade: parseInt(e.grade),
            type:  e.object_type,
            link:  e.link,
            icon:  `/${e.icon_path}/${e.icon}`,
        }))
    }

    else {
        payload = JSON.parse(res.trim()).aaData.map(e => ({
            name:  Util.substrBetween(e[2], '<b>', '</b>'),
            id:    parseInt(e[0]),
            grade: parseInt(Util.substrBetween(e[2], 'item_grade_', '"')),
            type:  e[4].display,
            link:  Util.substrBetween(e[2], 'href="', '"'),
            icon:  Util.substrBetween(e[1], 'src="', '"'),
        }))
    }

    payload.forEach(e => {
        e.scrape = (f) => Scraper(e.id, lang, Enums.SEARCH_TYPES[e.type], f)
    })

    return payload
}

module.exports = {
    LANGS:         Enums.LANGS,
    TYPES:         Enums.TYPES,
    SEARCH_TYPES:  Enums.SEARCH_TYPES,
    Search:        search,
    Scraper:       Scraper,
    Item:          async (id, lang, flag) => await Scraper(id, lang, 'item', flag),
    Recipe:        async (id, lang, flag) => await Scraper(id, lang, 'recipe', flag),
    MaterialGroup: async (id, lang, flag) => await Scraper(id, lang, 'materialgroup', flag),
}
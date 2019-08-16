const { evalItem } = require('./lib')

// https://bdocodex.com/us/recipe/115/
// Aloe Cookie
// 115

const data = {
    name: 'Aloe Cookie',
    alt_name: null,
    grade: '0',
    icon: '/items/new_icon/03_etc/07_productmaterial/00009205.png',
    stats: null,
    weight: null,
    type: 'Recipe',
    detailed_type: ['03_etc', '07_productmaterial'],
    prices: {
        buy: null,
        sell: null,
        repair: null,
    },
    item_effects: [],
    enhancement_effects: [],
    description: null,
    recipeExp: 400,
    recipeSkillLvl: 'Beginner 6'
}

evalItem('https://bdocodex.com/us/recipe/115/', data)
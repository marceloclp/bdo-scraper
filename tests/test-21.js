const { evalRecipe } = require('./lib')

// https://bdocodex.com/us/recipe/122/
// Beer
// 122

const data = {
    materials: [{
        name: 'Cereals',
        amount: 5,
        id: '1',
        link: '/us/materialgroup/1/',
        grade: '0',
    }, {
        name: 'Mineral Water',
        amount: 6,
        id: '9059',
        link: '/us/item/9059/',
        grade: '0',
    }, {
        name: 'Sugar',
        amount: 1,
        id: '9002',
        link: '/us/item/9002/',
        grade: '0',
    }, {
        name: 'Leavening Agent',
        amount: 2,
        id: '9005',
        link: '/us/item/9005/',
        grade: '0',
    }],
    results: [{
        name: 'Beer',
        amount: 1,
        id: '9213',
        link: '/us/item/9213/',
        grade: '1',
    }, {
        name: 'Cold Draft Beer',
        amount: 1,
        id: '9283',
        link: '/us/item/9283/',
        grade: '2',
    }]
}

evalRecipe('https://bdocodex.com/us/recipe/122/', data)
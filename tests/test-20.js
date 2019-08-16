const { evalRecipe } = require('./lib')

// https://bdocodex.com/us/recipe/115/
// Aloe Cookie
// 115

const data = {
    materials: [{
        name: 'Aloe',
        amount: 5,
        id: '7347',
        link: '/us/item/7347/',
        grade: '0',
    }, {
        name: 'Dough',
        amount: 7,
        id: '2',
        link: '/us/materialgroup/2/',
        grade: '0',
    }, {
        name: 'Honey',
        amount: 3,
        id: '48',
        link: '/us/materialgroup/48/',
        grade: '0',
    }, {
        name: 'Sugar',
        amount: 4,
        id: '9002',
        link: '/us/item/9002/',
        grade: '0',
    }],
    results: [{
        name: 'Aloe Cookie',
        amount: 1,
        id: '9205',
        link: '/us/item/9205/',
        grade: '1',
    }, {
        name: 'Sweet Aloe Cookie',
        amount: 1,
        id: '9294',
        link: '/us/item/9294/',
        grade: '2',
    }]
}

evalRecipe('https://bdocodex.com/us/recipe/115/', data)
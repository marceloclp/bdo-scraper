module.exports = [

{
    id:            9213,
    name:          `Beer`,
    grade:         1,
    icon:          `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
    type:          `Special Items`,
    weight:        `0.10 LT`,
    description:   `A mild alcoholic drink brewed from cereal grains`,
    p_transaction: true,
    prices:        { buy: `2,150`, sell: `86`, repair: null },
    effects: [
        `Worker Stamina Recovery +2`,
        `(Use through the Worker Menu on the World Map).`
    ],
    lifespan:      null,
    duration:      null,
    cooldown:      null,
    recipes: [{
        id:        122,
        icon:      `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
        name:      `Beer`,
        skill_lvl: `Beginner 1`,
        exp:       400,
        type:      `Cooking`,
        materials: [{
            link:   `/us/materialgroup/1/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007005.png`,
            amount: 5,
            id:     1,
        }, {
            link:   `/us/item/9059/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009059.png`,
            amount: 6,
            id:     9059,
        }, {
            link:   `/us/item/9002/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009002.png`,
            amount: 1,
            id:     9002,
        }, {
            link:   `/us/item/9005/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009005.png`,
            amount: 2,
            id:     9005,
        }],
        results: [{
            link:   `/us/item/9213/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
            amount: 1,
            id:     9213,
        }, {
            link:   `/us/item/9283/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009283.png`,
            amount: 1,
            id:     9283,
        }],
    }, {
        id:        204,
        icon:      `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
        name:      `Beer`,
        skill_lvl: `Beginner 1`,
        exp:       400,
        type:      `Cooking`,
        materials: [{
            link:   `/us/materialgroup/1/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007005.png`,
            amount: 5,
            id:     1,
        }, {
            link:   `/us/item/9059/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009059.png`,
            amount: 6,
            id:     9059,
        }, {
            link:   `/us/item/9002/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009002.png`,
            amount: 1,
            id:     9002,
        }, {
            link:   `/us/item/9005/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009005.png`,
            amount: 2,
            id:     9005,
        }],
        results: [{
            link:   `/us/item/9213/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
            amount: 1,
            id:     9213,
        }, {
            link:   `/us/item/9283/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009283.png`,
            amount: 1,
            id:     9283,
        }],
    }],
    used_in_recipe: [{
        id:        169,
        icon:      `/items/new_icon/03_etc/07_productmaterial/00009601.png`,
        name:      `Balenos Meal`,
        skill_lvl: `Skilled 6`,
        exp:       1600,
        type:      `Cooking`,
        materials: [{
            link:   `/us/item/9203/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009203.png`,
            amount: 1,
            id:     9203,
        }, {
            link:   `/us/item/9404/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009404.png`,
            amount: 1,
            id:     9404,
        }, {
            link:   `/us/item/9417/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009417.png`,
            amount: 1,
            id:     9417,
        }, {
            link:   `/us/item/9241/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009241.png`,
            amount: 2,
            id:     9241,
        }, {
            link:   `/us/item/9213/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
            amount: 2,
            id:     9213,
        }],
        results: [{
            link:   `/us/item/9601/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009601.png`,
            amount: 1,
            id:     9601,
        }, {
            link:   `/us/item/9602/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009602.png`,
            amount: 1,
            id:     9602,
        }]
    }]
},

{
    id:            748,
    name:          `Khalk's Elixir`,
    grade:         3,
    icon:          `/items/new_icon/03_etc/08_potion/00000748.png`,
    type:          `Consumable`,
    weight:        `0.50 LT`,
    description:   `An elixir with Fugitive Khalk's skin piece in it.`,
    p_transaction: false,
    prices:        { buy: `469,620`, sell: `156,540`, repair: null },
    effects: [
        `All Resistance +10%`,
        `Damage Reduction +15`,
        `Max HP +100`,
        `Movement Speed +5%`
    ],
    lifespan:      null,
    duration:      `20 min`,
    cooldown:      `20 min`,
    recipes: [{
        id:        182,
        icon:      `/items/new_icon/03_etc/08_potion/00000748.png`,
        name:      `Khalk's Elixir`,
        skill_lvl: `Skilled 1`,
        exp:       2000,
        type:      `Alchemy`,
        materials: [{
            link:   `/us/item/9736/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009736.png`,
            amount: 1,
            id:     9736,
        }, {
            link:   `/us/item/5012/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00005012.png`,
            amount: 10,
            id:     5012,
        }, {
            link:   `/us/item/5951/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00005951.png`,
            amount: 5,
            id:     5951,
        }, {
            link:   `/us/item/6656/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00006656.png`,
            amount: 4,
            id:     6656,
        }, {
            link:   `/us/item/6604/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00006604.png`,
            amount: 2,
            id:     6604,
        }],
        results: [{
            link:   `/us/item/748/`,
            icon:   `/items/new_icon/03_etc/08_potion/00000748.png`,
            amount: 1,
            id:     748,
        }],
    }]
},

{
    id:            9691,
    name:          `Seafood Cron Meal`,
    grade:         4,
    icon:          `/items/new_icon/03_etc/07_productmaterial/00009691.png`,
    type:          `Consumable`,
    weight:        `0.10 LT`,
    description:   `A melt in the mouth dish of delicate cheese and fresh seafood.`,
    p_transaction: false,
    prices:        { buy: `501,250`, sell: `20,050`, repair: null },
    effects:         [
        `Cooking/Alchemy Time -0.6 sec`,
        `Life EXP +10%`,
        `Processing Success Rate +10%`,
        `Gathering +2`,
        `Movement Speed +2`,
        `Fishing +2`,
        `Weight Limit +100 LT`,
        `Life Skill Mastery +25`
    ],
    lifespan:        null,
    duration:        `120 min`,
    cooldown:        `30 min`,
    recipes: [{
        id:        1677,
        icon:      `/items/new_icon/03_etc/07_productmaterial/00009691.png`,
        name:      `Seafood Cron Meal`,
        skill_lvl: `Beginner 0`,
        exp:       0,
        type:      `Simple Cooking`,
        materials: [{
            link:   `/us/item/9019/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009019.png`,
            amount: 1,
            id:     9019,
        }, {
            link:   `/us/item/9601/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009601.png`,
            amount: 3,
            id:     9601,
        }, {
            link:   `/us/item/9606/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009606.png`,
            amount: 3,
            id:     9606,
        }, {
            link:   `/us/item/9634/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009634.png`,
            amount: 1,
            id:     9634,
        }],
        results: [{
            link:   `/us/item/9691/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009691.png`,
            amount: 1,
            id:     9691,
        }],
    }]
},

{
    id:            9285,
    name:          `Fresh Fruit and Vegetable Salad`,
    grade:         2,
    icon:          `/items/new_icon/03_etc/07_productmaterial/00009285.png`,
    type:          `Consumable`,
    weight:        `0.10 LT`,
    description:   `A well-prepared fresh salad with seasonal fruits and vegetables.`,
    p_transaction: true,
    prices:        { buy: `11,350`, sell: `454`, repair: null },
    effects:         [
        `MP/WP/SP Recovery +5`
    ],
    lifespan:        null,
    duration:        `75min`,
    cooldown:        `30min`,
    recipes: [{
        id:        127,
        icon:      `/items/new_icon/03_etc/07_productmaterial/00009258.png`,
        name:      `Fruit and Vegetable Salad`,
        skill_lvl: `Apprentice 1`,
        exp:       700,
        type:      `Cooking`,
        materials: [{
            link:   `/us/materialgroup/3/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007313.png`,
            amount: 4,
            id:     3,
        }, {
            link:   `/us/materialgroup/13/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007318.png`,
            amount: 4,
            id:     13,
        }, {
            link:   `/us/item/9066/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009066.png`,
            amount: 1,
            id:     9066,
        }, {
            link:   `/us/item/9017/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009017.png`,
            amount: 2,
            id:     9017,
        }],
        results: [{
            link:   `/us/item/9258/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009258.png`,
            amount: 1,
            id:     9258,
        }, {
            link:   `/us/item/9285/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009285.png`,
            amount: 1,
            id:     9285,
        }],
    }]
},

{
    id:            9205,
    name:          `Aloe Cookie`,
    grade:         1,
    icon:          `/items/new_icon/03_etc/07_productmaterial/00009205.png`,
    type:          `Consumable`,
    weight:        `0.10 LT`,
    description:   `Baked grain dough cookies with aloe inside.`,
    p_transaction: true,
    prices:        { buy: `12,000`, sell: `480`, repair: null },
    effects:         [
        `All Accuracy +4`
    ],
    lifespan:        null,
    duration:        `30 min`,
    cooldown:        `30 min`,
    recipes: [{
        id:        115,
        icon:      `/items/new_icon/03_etc/07_productmaterial/00009205.png`,
        name:      `Aloe Cookie`,
        skill_lvl: `Beginner 6`,
        exp:       400,
        type:      `Cooking`,
        materials: [{
            link:   `/us/item/7347/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007347.png`,
            amount: 5,
            id:     7347,
        }, {
            link:   `/us/materialgroup/2/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007205.png`,
            amount: 7,
            id:     2,
        }, {
            link:   `/us/materialgroup/48/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007702.png`,
            amount: 3,
            id:     48,
        }, {
            link:   `/us/item/9002/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009002.png`,
            amount: 4,
            id:     9002,
        }],
        results: [{
            link:   `/us/item/9205/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009205.png`,
            amount: 1,
            id:     9205,
        }, {
            link:   `/us/item/9294/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009294.png`,
            amount: 1,
            id:     9294,
        }],
    }]
},

{
    id:            9306,
    name:          `Star Anise Tea`,
    grade:         0,
    icon:          `/items/new_icon/03_etc/07_productmaterial/00009306.png`,
    type:          `Consumable`,
    weight:        `0.30 LT`,
    description:   `Star anise tea.`,
    p_transaction: true,
    prices:        { buy: `5,000`, sell: `100`, repair: null },
    effects:         [
        `Cure Hypothermia`
    ],
    lifespan:        null,
    duration:        `Instant`,
    cooldown:        `5 sec`,
    recipes: [{
        id:        526,
        icon:      `/items/new_icon/03_etc/07_productmaterial/00009306.png`,
        name:      `Star Anise Tea`,
        skill_lvl: `Apprentice 1`,
        exp:       0,
        type:      `Simple Cooking`,
        materials: [{
            link:   `/us/item/6651/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00006651.png`,
            amount: 1,
            id:     6651,
        }, {
            link:   `/us/item/7019/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007019.png`,
            amount: 1,
            id:     7019,
        }],
        results: [{
            link:   `/us/item/9306/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009306.png`,
            amount: 1,
            id:     9306,
        }],
    }]
},

{
    id:            575,
    name:          `Whale Tendon Potion`,
    grade:         1,
    icon:          `/items/new_icon/03_etc/08_potion/00000575.png`,
    type:          `Consumable`,
    weight:        `0.30 LT`,
    description:   `A special potion for hunters.`,
    p_transaction: false,
    prices:        { buy: `94,500`, sell: `9,000`, repair: null },
    effects:         [
        `HP +500`,
        `MP/WP/SP +300`
    ],
    lifespan:        null,
    duration:        `Instant`,
    cooldown:        `30 sec`,
    recipes: [{
        id:        178,
        icon:      `/items/new_icon/03_etc/08_potion/00000575.png`,
        name:      `Whale Tendon Potion`,
        skill_lvl: `Apprentice 1`,
        exp:       800,
        type:      `Alchemy`,
        materials: [{
            link:   `/us/item/9729/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009729.png`,
            amount: 1,
            id:     9729,
        }, {
            link:   `/us/item/518/`,
            icon:   `/items/new_icon/03_etc/08_potion/00000518.png`,
            amount: 3,
            id:     518,
        }, {
            link:   `/us/item/521/`,
            icon:   `/items/new_icon/03_etc/08_potion/00000521.png`,
            amount: 3,
            id:     521,
        }, {
            link:   `/us/item/6656/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00006656.png`,
            amount: 8,
            id:     6656,
        }],
        results: [{
            link:   `/us/item/575/`,
            icon:   `/items/new_icon/03_etc/08_potion/00000575.png`,
            amount: 10,
            id:     575,
        }, {
            link:   `/us/item/576/`,
            icon:   `/items/new_icon/03_etc/08_potion/00000576.png`,
            amount: 1,
            id:     576,
        }],
    }]
},

/*{
    id:            567,
    name:          `Concentrated Grain Juice`,
    grade:         0,
    icon:          `/items/new_icon/03_etc/08_potion/00000567.png`,
    type:          `Consumable`,
    weight:        `0.60 LT`,
    description:   `This recovery juice is lighter than the usual recovery potions.`,
    p_transaction: true,
    prices:        { buy: `150`, sell: `45`, repair: null },
    effects:         [
        `HP +125`
    ],
    lifespan:        null,
    duration:        `Instant`,
    cooldown:        `3 sec`,
},*/

{
    id:            19923,
    name:          `[Event] Rice Cake Soup`,
    grade:         2,
    icon:          `/items/new_icon/09_cash/00019923.png`,
    type:          `Consumable`,
    weight:        `0.50 LT`,
    description:   `Traditional food from faraway country made for celebrating the new year.`,
    p_transaction: false,
    prices:        { buy: `0`, sell: null, repair: null },
    effects:         [
        `Full HP/MP/WP Recovery`
    ],
    lifespan:        null,
    duration:        `Instant`,
    cooldown:        `5 min`,
},

{
    id:            530,
    name:          `Instant HP Potion (Jumbo)`,
    grade:         0,
    icon:          `/items/new_icon/03_etc/08_potion/00000530.png`,
    type:          `Consumable`,
    weight:        `4.00 LT`,
    description:   `순간 회복제`,
    p_transaction: true,
    prices:        { buy: `4,500`, sell: `1,350`, repair: null },
    effects:         [],
    lifespan:        null,
    duration:        null,
    cooldown:        null,
},

{
    id:            9300,
    name:          `Thick Freekeh Snake Stew`,
    grade:         1,
    icon:          `/items/new_icon/03_etc/07_productmaterial/00009300.png`,
    type:          `Special Items`,
    weight:        `0.10 LT`,
    description:   `Stew with snake meat and freekeh with thicker broth.`,
    p_transaction: true,
    prices:        { buy: `23,625`, sell: `945`, repair: null },
    effects:         [
        `Worker's Stamina Recovery +6`,
        `(Use it from the Worker Management window in the World Map)`
    ],
    lifespan:        null,
    duration:        null,
    cooldown:        null,
    recipes: [{
        id:        199,
        icon:      `/items/new_icon/03_etc/07_productmaterial/00009215.png`,
        name:      `Freekeh Snake Stew`,
        skill_lvl: `Apprentice 1`,
        exp:       700,
        type:      `Cooking`,
        materials: [{
            link:   `/us/item/9059/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009059.png`,
            amount: 5,
            id:     9059,
        }, {
            link:   `/us/item/7021/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007021.png`,
            amount: 6,
            id:     7021,
        }, {
            link:   `/us/item/7922/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007922.png`,
            amount: 3,
            id:     7922,
        }, {
            link:   `/us/item/7019/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00007019.png`,
            amount: 2,
            id:     7019,
        }],
        results: [{
            link:   `/us/item/9215/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009215.png`,
            amount: 1,
            id:     9215,
        }, {
            link:   `/us/item/9300/`,
            icon:   `/items/new_icon/03_etc/07_productmaterial/00009300.png`,
            amount: 1,
            id:     9300,
        }],
    }]
},

]
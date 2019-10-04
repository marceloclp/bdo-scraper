module.exports = [

    {
        id:            9213,
        name:          `Cerveja`,
        grade:         1,
        icon:          `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
        type:          `Item Especial`,
        weight:        `0.10 LT`,
        description:   `Licor fraco com grãos.`,
        p_transaction: true,
        prices:        { buy: `2,150`, sell: `86`, repair: null },
        effects: [
            `Recupera +2 de ponto de ação do seu trabalhador (Use através do Menu de Trabalhador no Mapa Mundial).`
        ],
        lifespan:      null,
        duration:      null,
        cooldown:      null,
        recipes: [{
            id:        122,
            icon:      `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
            name:      `Cerveja`,
            skill_lvl: `Iniciante.1`,
            exp:       400,
            type:      `Culinária`,
            materials: [{
                link:   `/pt/materialgroup/1/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007005.png`,
                amount: 5,
                id:     1,
            }, {
                link:   `/pt/item/9059/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009059.png`,
                amount: 6,
                id:     9059,
            }, {
                link:   `/pt/item/9002/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009002.png`,
                amount: 1,
                id:     9002,
            }, {
                link:   `/pt/item/9005/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009005.png`,
                amount: 2,
                id:     9005,
            }],
            results: [{
                link:   `/pt/item/9213/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
                amount: 1,
                id:     9213,
            }, {
                link:   `/pt/item/9283/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009283.png`,
                amount: 1,
                id:     9283,
            }],
        }, {
            id:        204,
            icon:      `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
            name:      `Cerveja`,
            skill_lvl: `Iniciante.1`,
            exp:       400,
            type:      `Culinária`,
            materials: [{
                link:   `/pt/materialgroup/1/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007005.png`,
                amount: 5,
                id:     1,
            }, {
                link:   `/pt/item/9059/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009059.png`,
                amount: 6,
                id:     9059,
            }, {
                link:   `/pt/item/9002/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009002.png`,
                amount: 1,
                id:     9002,
            }, {
                link:   `/pt/item/9005/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009005.png`,
                amount: 2,
                id:     9005,
            }],
            results: [{
                link:   `/pt/item/9213/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
                amount: 1,
                id:     9213,
            }, {
                link:   `/pt/item/9283/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009283.png`,
                amount: 1,
                id:     9283,
            }],
        }],
        used_in_recipe: [{
            id:        169,
            icon:      `/items/new_icon/03_etc/07_productmaterial/00009601.png`,
            name:      `Refeição Balenos`,
            skill_lvl: `Proficiente.6`,
            exp:       1600,
            type:      `Culinária`,
            materials: [{
                link:   `/pt/item/9203/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009203.png`,
                amount: 1,
                id:     9203,
            }, {
                link:   `/pt/item/9404/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009404.png`,
                amount: 1,
                id:     9404,
            }, {
                link:   `/pt/item/9417/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009417.png`,
                amount: 1,
                id:     9417,
            }, {
                link:   `/pt/item/9241/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009241.png`,
                amount: 2,
                id:     9241,
            }, {
                link:   `/pt/item/9213/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009213.png`,
                amount: 2,
                id:     9213,
            }],
            results: [{
                link:   `/pt/item/9601/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009601.png`,
                amount: 1,
                id:     9601,
            }, {
                link:   `/pt/item/9602/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009602.png`,
                amount: 1,
                id:     9602,
            }]
        }]
    },

    {
        id:            748,
        name:          `Elixir do Khalk`,
        grade:         3,
        icon:          `/items/new_icon/03_etc/08_potion/00000748.png`,
        type:          `Consumível`,
        weight:        `0.50 LT`,
        description:   `Elixir com Efeito Defensivo.`,
        p_transaction: false,
        prices:        { buy: `469,620`, sell: `156,540`, repair: null },
        effects: [
            `Todas as Resisência +10%`,
            `Redução de Dano +15`,
            `HP Máx. +100`,
            `Velocidade de Movimento +5%`
        ],
        lifespan:      null,
        duration:      `20 min`,
        cooldown:      `20 min`,
        recipes: [{
            id:        182,
            icon:      `/items/new_icon/03_etc/08_potion/00000748.png`,
            name:      `Elixir do Khalk`,
            skill_lvl: `Proficiente.1`,
            exp:       2000,
            type:      `Alquimia`,
            materials: [{
                link:   `/pt/item/9736/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009736.png`,
                amount: 1,
                id:     9736,
            }, {
                link:   `/pt/item/5012/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00005012.png`,
                amount: 10,
                id:     5012,
            }, {
                link:   `/pt/item/5951/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00005951.png`,
                amount: 5,
                id:     5951,
            }, {
                link:   `/pt/item/6656/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00006656.png`,
                amount: 4,
                id:     6656,
            }, {
                link:   `/pt/item/6604/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00006604.png`,
                amount: 2,
                id:     6604,
            }],
            results: [{
                link:   `/pt/item/748/`,
                icon:   `/items/new_icon/03_etc/08_potion/00000748.png`,
                amount: 1,
                id:     748,
            }],
        }]
    },

    {
        id:            9691,
        name:          `Refeição de Frutos do Mar de Cron`,
        grade:         4,
        icon:          `/items/new_icon/03_etc/07_productmaterial/00009691.png`,
        type:          `Consumível`,
        weight:        `0.10 LT`,
        description:   `Prato feito com frutos do mar e queijo`,
        p_transaction: false,
        prices:        { buy: `501,250`, sell: `20,050`, repair: null },
        effects:         [
            `Redução no Tempo de Alquimia/Culinária em 0.6 seg.`,
            `EXP de Vida + 10%`,
            `Chance de Processamento + 10%`,
            `Velocidade de Coleta +2 Nv.`,
            `Velocidade de Movimento +2 Nv.`,
            `Velocidade de Pesca +2 Nv.`,
            `Peso Máximo +100LT`,
            `Maestria de Vida Total +25`
        ],
        lifespan:        null,
        duration:        `120 min`,
        cooldown:        `30 min`,
        recipes: [{
            id:        1677,
            icon:      `/items/new_icon/03_etc/07_productmaterial/00009691.png`,
            name:      `Refeição de Frutos do Mar de Cron`,
            skill_lvl: `Iniciante.0`,
            exp:       0,
            type:      `Cozinha Simples`,
            materials: [{
                link:   `/pt/item/9019/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009019.png`,
                amount: 1,
                id:     9019,
            }, {
                link:   `/pt/item/9601/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009601.png`,
                amount: 3,
                id:     9601,
            }, {
                link:   `/pt/item/9606/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009606.png`,
                amount: 3,
                id:     9606,
            }, {
                link:   `/pt/item/9634/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009634.png`,
                amount: 1,
                id:     9634,
            }],
            results: [{
                link:   `/pt/item/9691/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009691.png`,
                amount: 1,
                id:     9691,
            }],
        }]
    },

    {
        id:            9285,
        name:          `Salada de Fruta Fresca e de Legumes`,
        grade:         2,
        icon:          `/items/new_icon/03_etc/07_productmaterial/00009285.png`,
        type:          `Consumível`,
        weight:        `0.10 LT`,
        description:   `Salada Fresca de Legumes e Frutas.`,
        p_transaction: true,
        prices:        { buy: `11,350`, sell: `454`, repair: null },
        effects:         [
            `Recuperação de MP/SP/WP +5`
        ],
        lifespan:        null,
        duration:        `75 min`,
        cooldown:        `30 min`,
        recipes: [{
            id:        127,
            icon:      `/items/new_icon/03_etc/07_productmaterial/00009258.png`,
            name:      `Fruta e Salada de Legumes`,
            skill_lvl: `Aprendiz.1`,
            exp:       700,
            type:      `Culinária`,
            materials: [{
                link:   `/pt/materialgroup/3/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007313.png`,
                amount: 4,
                id:     3,
            }, {
                link:   `/pt/materialgroup/13/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007318.png`,
                amount: 4,
                id:     13,
            }, {
                link:   `/pt/item/9066/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009066.png`,
                amount: 1,
                id:     9066,
            }, {
                link:   `/pt/item/9017/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009017.png`,
                amount: 2,
                id:     9017,
            }],
            results: [{
                link:   `/pt/item/9258/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009258.png`,
                amount: 1,
                id:     9258,
            }, {
                link:   `/pt/item/9285/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009285.png`,
                amount: 1,
                id:     9285,
            }],
        }]
    },

    {
        id:            9205,
        name:          `Biscoito de Aloés`,
        grade:         1,
        icon:          `/items/new_icon/03_etc/07_productmaterial/00009205.png`,
        type:          `Consumível`,
        weight:        `0.10 LT`,
        description:   `Massa fresca com Aloe.`,
        p_transaction: true,
        //prices:        { buy: `12,000`, sell: `480`, repair: null }, // <= correct answer
        prices: { buy: null, sell: null, repair: null },
        effects:         [
            `Precisão Total +4`
        ],
        lifespan:        null,
        duration:        `30 min`,
        cooldown:        `30 min`,
        recipes: [{
            id:        115,
            icon:      `/items/new_icon/03_etc/07_productmaterial/00009205.png`,
            name:      `Biscoito de Aloés`,
            skill_lvl: `Iniciante.6`,
            exp:       400,
            type:      `Culinária`,
            materials: [{
                link:   `/pt/item/7347/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007347.png`,
                amount: 5,
                id:     7347,
            }, {
                link:   `/pt/materialgroup/2/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007205.png`,
                amount: 7,
                id:     2,
            }, {
                link:   `/pt/materialgroup/48/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007702.png`,
                amount: 3,
                id:     48,
            }, {
                link:   `/pt/item/9002/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009002.png`,
                amount: 4,
                id:     9002,
            }],
            results: [{
                link:   `/pt/item/9205/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009205.png`,
                amount: 1,
                id:     9205,
            }, {
                link:   `/pt/item/9294/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009294.png`,
                amount: 1,
                id:     9294,
            }],
        }]
    },

    {
        id:            9306,
        name:          `Chá de Anise Estrelar`,
        grade:         0,
        icon:          `/items/new_icon/03_etc/07_productmaterial/00009306.png`,
        type:          `Consumível`,
        weight:        `0.30 LT`,
        description:   `Chá de Anise Estrela.`,
        p_transaction: true,
        prices:        { buy: `5,000`, sell: `100`, repair: null },
        effects:         [
            `Cura Hipotermia`
        ],
        lifespan:        null,
        duration:        `Instantâneo`,
        cooldown:        `5 seg`,
        recipes: [{
            id:        526,
            icon:      `/items/new_icon/03_etc/07_productmaterial/00009306.png`,
            name:      `Chá de Anise Estrelar`,
            skill_lvl: `Aprendiz.1`,
            exp:       0,
            type:      `Cozinha Simples`,
            materials: [{
                link:   `/pt/item/6651/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00006651.png`,
                amount: 1,
                id:     6651,
            }, {
                link:   `/pt/item/7019/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007019.png`,
                amount: 1,
                id:     7019,
            }],
            results: [{
                link:   `/pt/item/9306/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009306.png`,
                amount: 1,
                id:     9306,
            }],
        }]
    },

    {
        id:            575,
        name:          `Poção de Tendão de Baleia`,
        grade:         1,
        icon:          `/items/new_icon/03_etc/08_potion/00000575.png`,
        type:          `Consumível`,
        weight:        `0.30 LT`,
        description:   `Poção especial para caçadores.`,
        p_transaction: false,
        prices:        { buy: `94,500`, sell: `9,000`, repair: null },
        effects:         [
            `Cura HP +500`,
            `Cura MP/WP/SP +300`
        ],
        lifespan:        null,
        duration:        `Instantânea`,
        cooldown:        `30 seg`,
        recipes: [{
            id:        178,
            icon:      `/items/new_icon/03_etc/08_potion/00000575.png`,
            name:      `Poção de Tendão de Baleia`,
            skill_lvl: `Aprendiz.1`,
            exp:       800,
            type:      `Alquimia`,
            materials: [{
                link:   `/pt/item/9729/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009729.png`,
                amount: 1,
                id:     9729,
            }, {
                link:   `/pt/item/518/`,
                icon:   `/items/new_icon/03_etc/08_potion/00000518.png`,
                amount: 3,
                id:     518,
            }, {
                link:   `/pt/item/521/`,
                icon:   `/items/new_icon/03_etc/08_potion/00000521.png`,
                amount: 3,
                id:     521,
            }, {
                link:   `/pt/item/6656/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00006656.png`,
                amount: 8,
                id:     6656,
            }],
            results: [{
                link:   `/pt/item/575/`,
                icon:   `/items/new_icon/03_etc/08_potion/00000575.png`,
                amount: 10,
                id:     575,
            }, {
                link:   `/pt/item/576/`,
                icon:   `/items/new_icon/03_etc/08_potion/00000576.png`,
                amount: 1,
                id:     576,
            }],
        }]
    },

    {
        id:            19923,
        name:          `[Evento] Sopa de Bolo de Arroz`,
        grade:         2,
        icon:          `/items/new_icon/09_cash/00019923.png`,
        type:          `Consumível`,
        weight:        `0.50 LT`,
        description:   `Uma comida tradicional feita por um país muito distante para comemorar o Ano Novo.`,
        p_transaction: false,
        prices:        { buy: `0`, sell: null, repair: null },
        effects:         [
            `Recupera toda a HP e MP/WP/SP`
        ],
        lifespan:        null,
        duration:        null,
        cooldown:        `5 min`,
    },

    {
        id:            530,
        name:          `Poção de HP Instantânea (Gigantesca)`,
        grade:         0,
        icon:          `/items/new_icon/03_etc/08_potion/00000530.png`,
        type:          `Consumível`,
        weight:        `4.00 LT`,
        description:   `Poção instantânea.`,
        p_transaction: true,
        prices:        { buy: `4,500`, sell: `1,350`, repair: null },
        effects:         [
            "Cura HP +400"
        ],
        lifespan:        null,
        duration:        `Instantânea`,
        cooldown:        `2 seg`,
    },

    {
        id:            9300,
        name:          `Ensopado de Cobra Freekeh Forte`,
        grade:         1,
        icon:          `/items/new_icon/03_etc/07_productmaterial/00009300.png`,
        type:          `Item Especial`,
        weight:        `0.10 LT`,
        description:   `Ensopado muito saboroso.`,
        p_transaction: true,
        prices:        { buy: `23,625`, sell: `945`, repair: null },
        effects:         [
            `Recupera em 6 os pontos de ação do Operário`,
            `(Use pela janela de gerenciamento de Operário do Mapa Mundial)`
        ],
        lifespan:        null,
        duration:        null,
        cooldown:        null,
        recipes: [{
            id:        199,
            icon:      `/items/new_icon/03_etc/07_productmaterial/00009215.png`,
            name:      `Ensopado de Cobra Freekeh`,
            skill_lvl: `Aprendiz.1`,
            exp:       700,
            type:      `Culinária`,
            materials: [{
                link:   `/pt/item/9059/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009059.png`,
                amount: 5,
                id:     9059,
            }, {
                link:   `/pt/item/7021/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007021.png`,
                amount: 6,
                id:     7021,
            }, {
                link:   `/pt/item/7922/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007922.png`,
                amount: 3,
                id:     7922,
            }, {
                link:   `/pt/item/7019/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00007019.png`,
                amount: 2,
                id:     7019,
            }],
            results: [{
                link:   `/pt/item/9215/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009215.png`,
                amount: 1,
                id:     9215,
            }, {
                link:   `/pt/item/9300/`,
                icon:   `/items/new_icon/03_etc/07_productmaterial/00009300.png`,
                amount: 1,
                id:     9300,
            }],
        }]
    },

]
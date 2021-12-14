const ennemyList = [
    [
        {
            name: 'voyou',
            e: 1,
            f: 2,
            a: 2,
            p: 0
        },
    ],
    [
        {
            name: 'voyou',
            e : 2,
            f : 3,
            a : 3,
            p : 0
        },
        {
            name: 'brigant',
            e : 4,
            f : 2,
            a : 1,
            p : 0
        }
    ],
    [
        {
            name: 'voyou',
            e : 3,
            f : 3,
            a : 4,
            p : 0
        },
        {
            name: 'brigant',
            e : 5,
            f : 2,
            a : 1,
            p : 0
        }
    ],
    [
        {
            name: 'voyou',
            e : 3,
            f : 4,
            a : 4,
            p : 0
        },
        {
            name: 'brigant',
            e : 5,
            f : 2,
            a : 1,
            p : 0
        },
        {
            name: 'bandit',
            e : 5,
            f : 4,
            a : 4,
            p : 0
        }
    ],
    [
        {
            name: 'voyou',
            e : 4,
            f : 4,
            a : 4,
            p : 0
        },
        {
            name: 'brigant',
            e : 6,
            f : 3,
            a : 1,
            p : 0
        },
        {
            name: 'bandit',
            e : 6,
            f : 4,
            a : 4,
            p : 0
        }
    ],
    [
        {
            name: 'voyou',
            e : 3,
            f : 4,
            a : 4,
            p : 0
        },
        {
            name: 'brigant',
            e : 6,
            f : 3,
            a : 2,
            p : 0
        },
        {
            name: 'bandit',
            e : 7,
            f : 5,
            a : 3,
            p : 0
        }
    ],
    [
        {
            name: 'voyou',
            e : 5,
            f : 5,
            a : 5,
            p : 0
        },
        {
            name: 'brigant',
            e : 8,
            f : 3,
            a : 2,
            p : 0
        },
        {
            name: 'bandit',
            e : 8,
            f : 5,
            a : 5,
            p : 0
        },
        {
            name: 'boss de clan',
            e : 5,
            f : 10,
            a : 2,
            p : 0
        }
    ],
    [
        {
            name: 'voyou',
            e : 8,
            f : 8,
            a : 5,
            p : 0
        },
        {
            name: 'brigant',
            e : 15,
            f : 4,
            a : 2,
            p : 0
        },
        {
            name: 'bandit',
            e : 13,
            f : 8,
            a : 5,
            p : 0
        },
        {
            name: 'boss de clan',
            e : 7,
            f : 20,
            a : 2,
            p : 0
        },
        {
            name: 'chef de district',
            e : 15,
            f : 35,
            a : 0,
            p : 0
        }
    ]
]

const getColor = (lvl) => {
    return [
        '#00ff00',
        '#1fe000',
        '#3ec100',
        '#5da200',
        '#7c8300',
        '#9b6400',
        '#ba4500',
        '#d92600'
    ][lvl];
}

const getEnnemy = (lvl, id) => {
    let ennemy = ennemyList[lvl][id];
    ennemy.onMap = `${ennemy.name} ${lvl}`;
    ennemy.type = 'ennemy';
    ennemy.color = getColor(lvl);
    return ennemy;
}

const getRandomEnnemy = (lvl) => {
    return getEnnemy(lvl, Math.floor(Math.random() * ennemyList[lvl].length));
}

module.exports = {
    getRandomEnnemy
};

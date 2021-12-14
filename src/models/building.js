const getRequirements = (building, lvl) => {
    requirements = {
        "forge": [
            {
                "ferraille": 2,
                "bois": 2,
                "textile": 1,
                "alcool": 0,
                "médicaments": 0,
            },
            {
                "ferraille": 4,
                "bois": 3,
                "textile": 2,
                "alcool": 1,
                "médicaments": 0,
            },
            {
                "ferraille": 12,
                "bois": 10,
                "textile": 5,
                "alcool": 3,
                "médicaments": 1,
            },
            {
                "ferraille": 38,
                "bois": 22,
                "textile": 11,
                "alcool": 19,
                "médicaments": 4,
            },
        ],
        "armurerie":
        [
            {
                "ferraille": 0,
                "bois": 2,
                "textile": 3,
                "alcool": 0,
                "médicaments": 0,
            },
            {
                "ferraille": 4,
                "bois": 7,
                "textile": 9,
                "alcool": 2,
                "médicaments": 0,
            },
            {
                "ferraille": 7,
                "bois": 10,
                "textile": 17,
                "alcool": 4,
                "médicaments": 0,
            },
            {
                "ferraille": 12,
                "bois": 10,
                "textile": 40,
                "alcool": 9,
                "médicaments": 2
            }
        ],
        "infirmerie":
        [
            {
                "ferraille": 0,
                "bois": 0,
                "textile": 4,
                "alcool": 5,
                "médicaments": 5,
            },
            {
                "ferraille": 0,
                "bois": 5,
                "textile": 6,
                "alcool": 8,
                "médicaments": 12,
            },
            {
                "ferraille": 3,
                "bois": 15,
                "textile": 20,
                "alcool": 19,
                "médicaments": 22,
            },
            {
                "ferraille": 6,
                "bois": 7,
                "textile": 15,
                "alcool": 35,
                "médicaments": 38,
            }
        ],
        "salleDeSport": [
            {
                "ferraille": 2,
                "bois": 2,
                "textile": 1,
                "alcool": 0,
                "médicaments": 0,
            },
            {
                "ferraille": 4,
                "bois": 3,
                "textile": 2,
                "alcool": 1,
                "médicaments": 0,
            },
            {
                "ferraille": 8,
                "bois": 6,
                "textile": 4,
                "alcool": 3,
                "médicaments": 1,
            },
            {
                "ferraille": 18,
                "bois": 15,
                "textile": 8,
                "alcool": 16,
                "médicaments": 1,
            }
        ],
        "salleDeMusculation": [
            {
                "ferraille": 4,
                "bois": 0,
                "textile": 1,
                "alcool": 0,
                "médicaments": 0
            },
            {
                "ferraille": 8,
                "bois": 1,
                "textile": 1,
                "alcool": 1,
                "médicaments": 0,
            },
            {
                "ferraille": 8,
                "bois": 4,
                "textile": 4,
                "alcool": 2,
                "médicaments": 0
            },
            {
                "ferraille": 15,
                "bois": 10,
                "textile": 9,
                "alcool": 15,
                "médicaments": 1
            }
        ],
        "salleAObstacles": [
            {
                "ferraille": 2,
                "bois": 3,
                "textile": 1,
                "alcool": 1,
                "médicaments": 0
            },
            {
                "ferraille": 5,
                "bois": 6,
                "textile": 3,
                "alcool": 1,
                "médicaments": 0
            },
            {
                "ferraille": 8,
                "bois": 8,
                "textile": 5,
                "alcool": 2,
                "médicaments": 1
            },
            {
                "ferraille": 12,
                "bois": 10,
                "textile": 9,
                "alcool": 10,
                "médicaments": 2
            }
        ],
        "salleACibles": [
            {
                "ferraille": 2,
                "bois": 1,
                "textile": 5,
                "alcool": 4,
                "médicaments": 0
            },
            {
                "ferraille": 8,
                "bois": 7,
                "textile": 10,
                "alcool": 15,
                "médicaments": 0
            },
            {
                "ferraille": 10,
                "bois": 11,
                "textile": 15,
                "alcool": 19,
                "médicaments": 5
            },
            {
                "ferraille": 15,
                "bois": 13,
                "textile": 17,
                "alcool": 20,
                "médicaments": 7
            }
        ]
    };

    return requirements[building][lvl]
}

const Base = () => {
    return {
        type: "base",
        onMap: "base",
        lvl: 0
    }
}

module.exports = {
    getRequirements,
    Base
}

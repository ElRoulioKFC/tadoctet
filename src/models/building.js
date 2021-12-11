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
        ]
    };

    return requirements[building][lvl]
}

const forge = (ressources) => {
}

const base = () => {
}

module.exports = {
    getRequirements,
    forge,
    base,
}

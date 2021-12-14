const attack = (attacker, target) => {
    if( attacker.arme != null )
        if( attacker.arme.weaponClass == 0 )
            target.e = attacker.arme.mod.f
        else
            target.e = target.e * (1 - attacker.arme.dmg);
    else
        target.e -= attacker.f;
}

const armes = [
    [
        {
            name: "épée de fortune",
            mod: {
                f: 1
            }
        },
        {
            name: 'épée en fer',
            mod: {
                f: 3
            }
        },
        {
            name: 'épée en acier',
            mod: {
                f: 5
            }
        },
        {
            name: 'botwave sword',
            mod: {
                f: 9
            }
        },
        {
            name: 'hache de fortune',
            mod: {
                f: +2,
                a: -1
            }
        },
        {
            name: 'hache en fer',
            mod: {
                f: 5,
                a: -3
            }
        },
        {
            name: 'hache en acier',
            mod: {
                f: 7,
                a: -4
            }
        },
        {
            name: 'fourche',
            mod: {
                f: 2
            }
        },
        {
            name: 'lasso',
            mod: {
                f: 1,
                a: 1
            }
        },
        {
            name: 'tesson de bouteille',
            mod: {
                f: 6,
                a: -8
            }
        },
        {
            name: 'Telisson de bouteille',
            mod: {
                f: 20,
                a: -5
            }
        }
    ],
    [
        {
            name: 'pistolet',
            desc: '-50% des pv',
            dmg: 0.5
        }
    ]
];

const init = () => {
    for( let i = 0; i < armes.length; i++)
        for( let j = 0; j < armes[i].length; j++) {
            armes[i][j].weaponClass = i;
            armes[i][j].bodyPart = 'arme';
        }
}

init()

/*
    bouclier en bois +2 a
    bouclier en fer +4 a
    bouclier en acier +8 a
    bouclier du monde +14 f +12 a  (obtenu auprès du Père Nel)
    */


module.exports = {
    armes,
    attack
};

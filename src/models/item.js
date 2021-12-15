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
            dmg: 0.5
        },
        {
            name: 'fusil',
            dmg: 0.8
        },
        {
            name: 'sniper',
            dmg: 1,
            mod: {
                a: -8,
                p: 5
            }
        },
        {
            name: 'superGrosFlingueDePoche',
            dmg: 1,
            mod: {
                a: 2
            }
        }
    ]
];

materiaux = [
    {
        name: 'ferraille',
    },
    {
        name: 'bois',
    },
    {
        name: 'textiles',
    },
    {
        name: 'alcool',
    },
    {
        name: 'medicaments',
    }
];

soins: [
    {
        name: 'bandage',
        healing: 0.2
    },
    {
        name: 'kit de fortune',
        healing: 0.33
    },
    {
        name: 'kit industriel',
        healing: 0.5
    },
    {
        name: 'kit de soins',
        healing: 0.75
    },
    {
        name: 'kit ultime',
        healing: 1
    },
]

armure = [
    {
        name: 'poubelle',
        bodyPart: 'tete',
        mod: {
            e: 1
        }
    },
    {
        name: 'casserole',
        bodyPart: 'tete',
        mod: {
            e: 2
        }
    },
    {
        name: 'casquette',
        bodyPart: 'tete',
        mod: {
            e: 1
        }
    },
    {
        name: 'seau en bois',
        bodyPart: 'tete',
        mod: {
            e: 3
        }
    },
    {
        name: 'casque en fer',
        bodyPart: 'tete',
        mod: {
            e: 4
        }
    },
    {
        name: 'casque en acier',
        bodyPart: 'tete',
        mod: {
            e: 6
        }
    },
    {
        name: 'casque en titane',
        bodyPart: 'tete',
        mod: {
            e: 8
        }
    },
    {
        name: 'casque en peau de Roche',
        bodyPart: 'tete',
        mod: {
            e: 19
        }
    },
    {
        name: 'armure en carton-pâte',
        bodyPart: 'corps',
        mod: {
            e: 4
        }
    },
    {
        name: 'armure en cuir',
        bodyPart: 'corps',
        mod: {
            e: 7
        }
    },
    {
        name: 'armure en plexiglass',
        bodyPart: 'corps',
        mod: {
            e: 7
        }
    },
    {
        name: 'armure de fer',
        bodyPart: 'corps',
        mod: {
            e: 11
        }
    },
    {
        name: 'armure en acier',
        bodyPart: 'corps',
        mod: {
            e: 17
        }
    },
    {
        name: 'armure en titane',
        bodyPart: 'corps',
        mod: {
            e: 20
        }
    },
    {
        name: 'armure en peau de Roche',
        bodyPart: 'corps',
        mod: {
            e: 39
        }
    },
    {
        name: 'sac plastique carrouf',
        bodyPart: 'sac',
        mod: {
            capacity: 3 
        }
    },
    {
        name: 'sac en peau de lézard',
        bodyPart: 'sac',
        mod: {
            capacity: 5 
        }
    },
    {
        name: 'sac en cuir',
        bodyPart: 'sac',
        mod: {
            capacity: 7 
        }
    },
    {
        name: 'sac en cuir de jaguar',
        bodyPart: 'sac',
        mod: {
            capacity: 11 
        }
    },
    {
        name: 'sac westpocket',
        bodyPart: 'sac',
        mod: {
            capacity: 17 
        }
    },
    {
        name: 'sac luc damiens',
        bodyPart: 'sac',
        mod: {
            capacity: 25 
        }
    },
    {
        name: 'immense sac rando-rigolo',
        bodyPart: 'sac',
        mod: {
            capacity: 50 
        }
    },
    {
        name: 'sac béchanelle',
        bodyPart: 'sac',
        mod: {
            capacity: 75 
        }
    },
    {
        name: 'sac en peau de roche',
        bodyPart: 'sac',
        mod: {
            capacity: 200 
        }
    }
]


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

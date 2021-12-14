const partieModel = require("../models/partie.js");
const itemModel = require("../models/item.js");

const joueurList = {};

const Joueur = (pId) => {
    let id = joueurList[pId].length;
    let j = {
        id,
        e: 3,
        f: 2,
        a: 2,
        p: 1,
        tete: null,
        corps: null,
        arme: null,
        bouclier: null,
        invSize: 2,
        x: 0,
        y: 0,
        inventaire: [
        ]
    };

    joueurList[pId].push( j );
    
    console.log( joueurList[pId])
    return id;
};

const newTeam = (pId) => {
    joueurList[pId] = [];
}

const pickup = () => {
}

const equipe = (jId, slot) => {
    let j = joueurList[jId];
    let item = j.inventaire[slot];

    if( item && item.isArmor )
        j[item.bodyPart] = item.e;
}

const move = (jId, pId) => {
};

module.exports = {
    move,
    Joueur,
    equipe,
    pickup,
    newTeam
};

test = () => {
    newTeam(0)
    Joueur(0)
    let ennemy = {e: 4};
    itemModel.attack(ennemy, itemModel.armes[1][0]);
    console.log(ennemy.e)
}


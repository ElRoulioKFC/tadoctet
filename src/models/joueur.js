const itemModel = require("./item.js");

const joueurList = {};

const dirToCoo = {
    'n': [0, -1],
    'e': [1,  0],
    's': [0,  1],
    'o': [-1, 0]
};

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
        coo: [0, 0],
        inventaire: [
        ]
    };

    joueurList[pId].push( j );
    
    return id;
};

const newTeam = (pId) => {
    joueurList[pId] = [];
}

const pickup = () => {
}

const inspect = () => {
}

const equipe = (jId, pId, slot) => {
    let j = joueurList[pId][jId];
    let item = j.inventaire[slot];

    if( item && item.bodyPart )
        j[item.bodyPart] = item.e;
}

const move = (jId, pId, dir) => {
    // next case
    // case vide ou base ?
    //  oui: deplace j renvoie event
    //  non: renvoie err
    let partieModel = require("../models/partie.js");
    let j = joueurList[pId][jId]
    let [x, y] = j.coo;
    x += dirToCoo[dir][0];
    y += dirToCoo[dir][1];
    let tile = partieModel.getGrille(pId, x, y);
    if( tile.players.length == 0 || tile.type == 'base') {
        j.coo = [x, y];
    }
    return tile;
};

const die = (jId, pId) => {
    let partieModel = require("../models/partie.js");

    let j = joueurList[pId][jId]
    let [x, y] = j.coo;
    [x, y] = partieModel.mapToRep(partieModel.getMap(pId), x, y);
    partieModel.addToCell(pId, x, y, 'inventaire', j.inventaire)
    j.inventaire = {};
    j.coo = [0, 0];
    partieModel.addToCell(pId, x, y, 'players', []);
    partieModel.parties[pId].map.grille[y][x].players.push(j);
}

const drop = (jId, pId, slot) => {
    let partieModel = require("../models/partie.js");
    let j = joueurList[pId][jId]
    let [x, y] = j.coo;
    let item = j.inventaire[slot];
    let tile = partieModel.getGrille(pId, x, y);
    partieModel.getMap(pId).inventaire.push(item);
}

module.exports = {
    move,
    Joueur,
    equipe,
    pickup,
    newTeam,
    die,
    inspect
};

test = () => {
    newTeam(0)
    Joueur(0)
    let ennemy = {e: 4};
    itemModel.attack(ennemy, itemModel.armes[1][0]);
    console.log(ennemy.e)
}


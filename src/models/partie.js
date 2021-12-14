const ennemyModel = require("./ennemi.js");
const buildingModel = require("./building.js");
const joueurModel = require('./joueur.js');


// todo: case
//  ex:
//   grille[0][5] = {
//      event:
//   }

let nextPartieId = 0;
let parties = {};

const getGrille = (grille, x, y) => {
    return grille.grille[y + grille.height/2][x + grille.width/2];
}

const setGrille = (grille, x, y, data) => {
    grille.grille[y + grille.height/2][x + grille.width/2] = data;
}

const mapToMap = (map, x, y) => {
    return [x - map.width / 2, y - map.height / 2];
}

const printMap = (map) => {
    let str = "";
    for (let i=0; i < map.height; i++) {
        for (let j=0; j < map.width; j++) {
            str = `${str} [${map.grille[i][j].onMap}]`;
        }
        str = `${str}\n`
    }
    console.log(str)
}

const putEvent = (map, px, py) => {
    let [x, y] = mapToMap(map, px, py);
    let dst = Math.sqrt(x*x + y*y);
    let lvl = Math.floor(dst * 7 / map.maxDistance);
    // todo: mettre event au lieu de ennemy
    setGrille(map, x, y, ennemyModel.getRandomEnnemy(lvl));
}

const Map = (width, height) => {
    let grille = new Array(height);

    for (let i=0; i < height; i++) {
        grille[i] = new Array(width);
        for (let j=0; j < width; j++) {
            grille[i][j] = 0
        }
    }

    // div by 2 car la base est au centre
    let maxDistance = Math.sqrt(width * width + height * height) / 2;
    let map = {
        width,
        height,
        grille,
        maxDistance
    };

    for (let i=0; i < width; i++) {
        for (let j=0; j < height; j++) {
            putEvent(map, i, j);
        }
    }

    setGrille(map, 0, 0, buildingModel.Base());

    return map;
};

const Partie = () => {
    let id = nextPartieId++;
    let map = Map(200, 200);

    joueurModel.newTeam(id);
    let jId = joueurModel.Joueur(id);
    parties[id] = {
        id,
        map,
        batiments: {},
        joueurs: [jId],
        lvl: 0,
        karma: 0
    };


    return parties[id];
};

const getPartie = (id) => {
    return parties[id];
};

const join = (partieId) => {
    let playerId = joueurModel.Joueur(partieId);
    parties[partieId].joueurs.push( playerId );
    return playerId;
}

const listParties = () => {
    return Object.keys(parties);
}

const getData = (partieId, key) => {
    return parties[partieId][key];
}

module.exports = {
    Map,
    Partie,
    getPartie,
    join,
    listParties,
    getData,
    setGrille,
    getGrille
};

const test = () => {
    testMap = Map(12, 12);
    printMap(testMap)

    testMap = Map(100, 100);
    putEvent(testMap, 50, 50);
    putEvent(testMap, 67, 54);
    putEvent(testMap, 0, 50);
    putEvent(testMap, 15, 15);
    putEvent(testMap, 0, 0);
}

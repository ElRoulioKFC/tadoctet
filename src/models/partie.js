const ennemyModel = require("./ennemi.js");
const eventModel = require("./event.js");
const buildingModel = require("./building.js");
const joueurModel = require('./joueur.js');


// todo: case
//  ex:
//   grille[0][5] = {
//      event:
//   }

let nextPartieId = 0;
let parties = {};

const getGrille = (pId, x, y) => {
    let map = parties[pId].map;
    return map.grille[y + map.height/2][x + map.width/2];
}

const setGrille = (pId, x, y, data) => {
    let map = parties[pId].map;
    map.grille[y + map.height/2][x + map.width/2] = data;
}

const mapToMap = (map, x, y) => {
    return [x - map.width / 2, y - map.height / 2];
}

const mapToRep = (map, x, y) => {
    return [x + map.width / 2, y + map.height / 2];
}

const printMap = (map) => {
    let str = "";
    for (let i=0; i < map.height; i++) {
        for (let j=0; j < map.width; j++) {
            if( map.grille[i][j]['type'] == 'event')
                str = `${str} [${map.grille[i][j].event.lvl}]`;
            else if ( map.grille[i][j]['type'] == 'base')
                str = `${str} [${map.grille[i][j].base.lvl}]`;
            if( map.grille[i][j].players.length > 0)
                str = `${str} [j]`;
        }
        str = `${str}\n`
    }
    console.log(str)
}

const addToCell = (pId, x, y, key, val) => {
    let map = parties[pId].map;
    map.grille[y][x][key] = val;
}

const getMap = (pId) => {
    return parties[pId].map;
}

const putEvent = (pId, px, py) => {
    let map = parties[pId].map;
    let [x, y] = mapToMap(map, px, py);
    let dst = Math.sqrt(x*x + y*y);
    let lvl = dst / map.maxDistance;
    // todo: mettre event au lieu de ennemy
    // setGrille(map, x, y, ennemyModel.getRandomEnnemy(lvl));
    let ev = eventModel.getRandomEvent(lvl);
    addToCell(pId, px, py, 'event', ev);
    addToCell(pId, px, py, 'type', 'event');
}

const Map = (width, height, pId) => {
    let grille = new Array(height);

    for (let i=0; i < height; i++) {
        grille[i] = new Array(width);
        for (let j=0; j < width; j++) {
            grille[i][j] = {
                'players': [],
                'inventaire': []
            };
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

    return map;
};

const Partie = () => {
    let id = nextPartieId++;
    let map = Map(200, 200, id);

    parties[id] = {
        id,
        map,
        batiments: {},
        nextLvlBat: {
            "forge": 0,
            "armurerie": 0,
            "infirmerie": 0,
            "salleDeSport": 0,
            "salleDeMusculation": 0,
            "salleAObstacles": 0,
            "salleACibles": 0,
            "base": 0
        },
        lvl: 0,
        karma: 0
    };

    parties[id].base = buildingModel.Base();

    for (let i=0; i < map.width; i++) {
        for (let j=0; j < map.height; j++) {
            putEvent(id, i, j);
        }
    }

    addToCell(id, 0, 0, 'base', );
    addToCell(id, 0, 0, 'type', 'base');

    joueurModel.newTeam(id);
    let jId = joueurModel.Joueur(id);
    parties[id].joueurs = [jId];

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

const construire = (pId, batiment) => {
    let p = parties[pId];
    let requirements = buildingModel.getRequirements( batiment, p.nextLvlBat[batiment]);

    Object.keys(requirements).forEach( (key) => {
        console.log(key)
        if( p.base.ressources[key] < requirements[key]) {
            return false;
        }
    });

    let niveau = p.nextLvlBat[batiment]++; 
    let cout = buildingModel.getRequirements( batiment, p.nextLvlBat[batiment] );
    p.batiments[batiment] = {
        nom: batiment,
        niveau,
        cout
    }
    console.log( p.nextLvlBat[batiment] )
    console.log( p.batiments )

    return true;

}

module.exports = {
    Map,
    Partie,
    getPartie,
    join,
    listParties,
    getData,
    setGrille,
    getGrille,
    addToCell,
    getMap,
    mapToMap,
    mapToRep,
    parties,
    construire
};

const test = () => {
    par = Partie();
    printMap(par.map)
    joueurModel.move(0, 0, 'n');
}

//test()

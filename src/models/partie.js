let nextPartieId = 0;
let parties = {};

const getGrille = (grille, x, y) => {
    return grille.grille[y + grille.height/2][x + grille.width/2];
}

const setGrille = (grille, x, y, data) => {
    grille.grille[y + grille.height/2][x + grille.width/2] = data;
}

const Map = (width, height) => {
    let grille = new Array(height);
    for (let i=0; i < height; i++) {
        grille[i] = new Array(width);
        for (let j=0; j < height; j++) {
            grille[i][j] = 0;
        }
    }

    let map = {
        width,
        height,
        grille
    };

    setGrille(map, 0, 0, 'base');

    return map;
};

const Partie = () => {
    let id = nextPartieId++;
    let map = Map(200, 200);

    parties[id] = {
        id,
        map,
        batiments: {},
        joueurs: [0],
        nextPlayerId: 1,
        lvl: 0
    };

    return parties[id];
};

const getPartie = (id) => {
    return parties[id];
};

const join = (partieId) => {
    let playerId = parties[partieId].nextPlayerId++;
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
    getData
};

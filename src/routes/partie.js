const partieModel = require("../models/partie.js");

const create = (req, res) => {
    console.log('call create');

    try {
        let partie = partieModel.Partie();

        res.status(200).json({
            partieId: partie.id,
            playerId: 0
        });
    } catch (err) {
        console.log(`create: ${err}`);
        res.status(300).send('err');
    }
};

const join = (req, res) => {
    console.log('call join');

    try{
        let partieId = req.body.partieId;
        let playerId = partieModel.join(partieId);
        res.status(200).json({partieId, playerId});
    } catch( err ) {
        console.log(`join: ${err}`);
        res.status(300).send('err');
    }
}

const addPartieData = (req, res, next) => {
    console.log('call addPartieData');

    try{
        req.body.partie = partieModel.getPartie(req.body.id);
        next();
    } catch( err ) {
        console.log(`addPartieData: ${err}`);
        res.status(300).send('err');
    }
}

const listParties = (req, res) => {
    console.log('call listParties');

    try {
        let list = partieModel.listParties();
        res.status(200).json(list);
    } catch( err ) {
        console.log(`listParties: ${err}`);
        res.status(300).send('err');
    }
}

const getBaseRessources = (req, res) => {
    console.log('hi')
    let pId = req.body.partieId;

    console.log(pId);
    let ressources = partieModel.parties[pId].base.ressources;

    ressources.medicament = ressources.medicaments;
    ressources.medicaments = undefined;
    res.status(200).json(ressources);
}

const getBaseBatiments = (req, res) => {
    console.log('hi')
    let pId = req.body.partieId;

    console.log(pId);
    let batiments = partieModel.parties[pId].batiments;

    res.status(200).json(batiments);
}

const getGrille = (req, res) => {
    console.log('call getGrille');

    try {
        let map = partieModel.getMap(req.body.partieId);
        grille = map.grille;
        let [x, y] = partieModel.mapToRep(map, req.body.x, req.body.y)
        let w = req.body.w;

        console.log(w)
        console.log(x)
        console.log(y)

        let g2 = [];
        for( let i=0; i<w; i++) {
            g2[i] = Array(w);
            for( let j=0; j<w; j++)
                g2[i][j] = grille[y-w/2 + i][x-w/2 + j];
        }

        console.log(g2)
        
        res.status(200).json(g2);
    } catch( err ) {
        console.log(`getGrille: ${err}`);
        res.status(300).send('err');
    }
}

const construire = (req, res) => {
    console.log('call construire');

    try {
        let check = partieModel.construire(req.body.partieId, req.body.batiment);
        res.status(200).send( check );
    } catch( err ) {
        console.log(`construire: ${err}`);
        res.status(300).send('err');
    }
}

module.exports = {
    create,
    addPartieData,
    join,
    listParties,
    getGrille,
    construire,
    getBaseRessources,
    getBaseBatiments
};

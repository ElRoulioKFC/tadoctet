const partieModel = require("../models/partie.js");

const create = async(req, res) => {
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

const join = async(req, res) => {
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

const addPartieData = async(req, res, next) => {
    console.log('call addPartieData');

    try{
        req.body.partie = partieModel.getPartie(req.body.id);
        next();
    } catch( err ) {
        console.log(`addPartieData: ${err}`);
        res.status(0).send('err');
    }
}

const listParties = async(req, res) => {
    console.log('call listParties');

    try {
        let list = partieModel.listParties();
        res.status(200).json(list);
    } catch( err ) {
        console.log(`listParties: ${err}`);
        res.status(0).send('err');
    }
}

const getGrille = (req, res) => {
    console.log('call getGrille');

    try {
        let grille = partieModel.getData(req.body.partieId, 'map');
        res.status(200).json(grille);
    } catch( err ) {
        console.log(`getGrille: ${err}`);
        res.status(0).send('err');
    }
}

module.exports = {
    create,
    addPartieData,
    join,
    listParties,
    getGrille
};

const joueurModel = require('../models/joueur.js');

const move = (req, res) => {
    console.log('call move');

    let jId = req.body.playerId;
    let pId = req.body.partieId;

    joueurModel.move(jId, pId);
};

module.exports = {
    move
};

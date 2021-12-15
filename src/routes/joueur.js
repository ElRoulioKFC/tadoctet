const joueurModel = require('../models/joueur.js');

const move = (req, res) => {
    console.log('call move');

    let jId = req.body.playerId;
    let pId = req.body.partieId;
    let dir = req.body.direction;

    let tile = joueurModel.move(jId, pId, dir);
    res.status(200).json(tile);
};

const die = (req, res) => {
    console.log('call die');

    let jId = req.body.playerId;
    let pId = req.body.partieId;

    joueurModel.die(jId, pId);
    res.status(200).send('vous etes mort')
}

const drop = (req, res) => {
    console.log('call drop');

    let jId = req.body.playerId;
    let pId = req.body.partieId;
    let slot = req.body.slot;

    joueurModel.die(jId, pId. slot);
    res.status(200).json({msg: 'vous deposez un objet'})
}

const inspect = (req, res) => {
}

const pickup = (req, res) => {
}

const equipe = (req, res) => {
    console.log('call equipe');

    let jId = req.body.playerId;
    let pId = req.body.partieId;
    let slot = req.body.slot;

    joueurModel.equipe(jId, pId. slot);
    res.status(200).json({msg: 'vous deposez un objet'})
}

module.exports = {
    move,
    die,
    drop,
    equipe,
    pickup,
    inspect
};

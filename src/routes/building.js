const buildingModel = require("../models/building.js");
const partieModel = require("../models/partie.js");

const getBatiment = async (req, res) => {
    console.log('call getBatiment')

    let building = req.body.building;
    let lvl = partieModel.getData(req.body.partieId, 'nextLvlBat')[building];

    let requirements = buildingModel.getRequirements(building, lvl)

    res.status(200).json({requirements});
}

const construire = async(req, res) => {
}

module.exports = {
    getBatiment,
    construire
};

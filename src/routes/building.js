const buildingModel = require("../models/building.js");
const partieModel = require("../models/partie.js");

const getBatiment = async (req, res) => {
    let building = req.body.building;
    let lvl = partieModel.getData(req.body.partieId, 'lvl');

    let requirements = buildingModel.getRequirements(building, lvl)

    res.status(200).json({requirements});
}

module.exports = {
    getBatiment
};

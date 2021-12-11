const equipe = require("./equipe.js");
const partie = require("./partie.js");
const joueur = require("./joueur.js");
const building = require("./building.js");

const todo = (req, res) => {
    res.status(200).send("unavailable");
}

module.exports = {
    equipe,
    joueur,
    partie,
    building,
    todo
};

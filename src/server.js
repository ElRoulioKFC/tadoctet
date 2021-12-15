const exp = require("express");
const { body, validationResult } = require('express-validator');
const app = exp();

const router = require("./routes/router.js");

app.use( exp.json() );

app.get("/", (req, res) => {
    console.log('hello');
    res.status(200).send("hello");
})

app.post("/getBaseRessources",
    router.partie.getBaseRessources
);

app.post("/getBaseBatiments",
    router.partie.getBaseBatiments
);

app.get("/createPartie",
    router.partie.create
);

app.get("/join",
    body("partieId").not().isEmpty(),
    router.partie.join
);

app.get("/list",
    router.partie.listParties
);

// bloque pendant 30 seconde apres un appel
app.get("/construire",
    router.partie.construire
);

app.get("/getGrille",
    body("partieId").not().isEmpty(),
    router.partie.getGrille
);

app.get("/move",
    body("partieId").not().isEmpty(),
    body("playerId").not().isEmpty(),
    body("direction").not().isEmpty(),
    router.joueur.move
);

app.get("/die",
    router.joueur.die
);

// revoie tout les batiments deja construis

app.get("/getBatimentCostSalleDeMusculation",
    body('building').default('salleDeMusculation'),
    router.building.getBatiment
);

app.get("/getBatimentCostSalleDeSport",
    body('building').default('salleDeSport'),
    router.building.getBatiment
);

app.get("/getBatimentCostSalleACibles",
    body('building').default('salleACibles'),
    router.building.getBatiment
);

app.get("/getBatimentCostInfirmerie",
    body('building').default('infirmerie'),
    router.building.getBatiment
);

app.get("/getBatimentCostArmurerie",
    body('building').default('armurerie'),
    router.building.getBatiment
);

app.get("/getBatimentCostForge",
    body('building').default('forge'),
    router.building.getBatiment
);

app.get("/getBatimentCostBase",
    body('building').default('base'),
    router.building.getBatiment
);

app.listen(3000, () => {
    console.log("----------server up---------");
})

/*
app.post("/signup",
    body('email').isEmail().normalizeEmail(),
    body('firstName').not().isEmpty().escape(),
    body('lastName').not().isEmpty().escape(),
    body('password').not().isEmpty().escape(),
    router.user.signup
)

app.post("/signin",
    body('email').isEmail().normalizeEmail(),
    body('password').not().isEmpty().escape(),
    router.user.signin
)
*/

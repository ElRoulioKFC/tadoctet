const exp = require("express");
const { body, validationResult } = require('express-validator');
const app = exp();

const router = require("./routes/router.js");

app.use( exp.json() );

app.get("/", (req, res) => {
    console.log('hello');
    res.status(200).send("hello");
})

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
    router.todo
);

// revoie tout les batiments deja construis

app.get("/getBatimentCostSalleDeMusculation",
    body('building').default('SalleDeMusculation'),
    router.building.getBatiment
);

app.get("/getBatimentCostSalleACibles",
    body('building').default('SalleACibles'),
    router.building.getBatiment
);

app.get("/getBatimentCostInfirmerie",
    body('building').default('SalleInfirmerie'),
    router.building.getBatiment
);

app.get("/getBatimentCostArmurerie",
    body('building').default('SalleArmurerie'),
    router.building.getBatiment
);

app.get("/getBatimentCostForge",
    body('building').default('forge'),
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

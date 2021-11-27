const exp = require("express");
const { body, validationResult } = require('express-validator');
const app = exp();

const router = require("./routes/router.js");

app.use(exp.json());

app.get("/", (req, res) => {
    console.log('hello');
    res.status(200).send("hello");
})

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

const express = require("express");

const router = express.Router();
const {registerController , loginController , currentController} = require("../controllers/user");
const { loginRules, regiterRules, validation } = require("../middleware/validator");
const isAuth = require("../middleware/passport");
// router.get("/", (req, res) => {
//     res.send("Welcome")
// });


// register routes 
router.post("/register", regiterRules(),validation,  registerController);
router.post("/login", loginRules(), validation,  loginController);
router.get("/current", isAuth() , currentController);
module.exports = router; 
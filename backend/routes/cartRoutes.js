const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const{
    addToCart,
    getCart,

} = require("../controllers/cartControllers");

router.post("/", auth, addToCart);

router.get("/", auth, getCart);

module.exports = router;
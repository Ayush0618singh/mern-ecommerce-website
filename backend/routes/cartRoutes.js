const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const{
    addToCart,
    getCartItems,
    updateCartQuantity,
    deleteCartItem,

} = require("../controllers/cartControllers");

router.post("/", auth, addToCart);

router.get("/", auth, getCartItems);

router.put("/:id", auth, updateCartQuantity);

router.delete("/:id", auth, deleteCartItem);

module.exports = router;
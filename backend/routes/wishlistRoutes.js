const express = require("express");
const router  = express.Router();

const auth = require("../middleware/auth");
const {
    addToWishlist,
    getWishlist,
    removeWishlistItem,
}=require("../controllers/wishlistController");

//Add Product to Wishlist
router.post("/", auth, addToWishlist);

//Get Logged In User Wishlist
router.get("/", auth, getWishlist);

//Remive Product from Wishlist
router.delete("/:id", auth, removeWishlistItem);

module.exports = router;
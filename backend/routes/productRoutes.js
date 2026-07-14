const express = require("express");

const {
    addProduct,
    getProducts,
    getSingleProduct,
    deleteProduct,

} = require("../controllers/productController");

const router = express.Router();

router.post("/add", addProduct);

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
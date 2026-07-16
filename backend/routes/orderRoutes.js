const express = require("express");

const router = express.Router();
const auth = require("../middleware/auth");

const {
    placeOrder,
    getMyOrders,
    getSingleOrder,
    
} = require("../controllers/orderControllers");

router.post("/", auth, placeOrder);

router.get("/", auth, getMyOrders);

router.get("/:id", auth, getSingleOrder);

module.exports = router;
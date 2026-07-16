const express = require("express");

const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
    placeOrder,
    getMyOrders,
    getSingleOrder,
    getAllOrders,
    updateOrderStatus,
    
} = require("../controllers/orderControllers");

router.post("/", auth, placeOrder);
router.get("/", auth, getMyOrders);
router.get("/admin", auth, admin, getAllOrders);
router.put("/:id", auth, admin, updateOrderStatus);
router.get("/:id", auth, getSingleOrder);
 

module.exports = router;
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const{
    addReview,
    getProductReviews,
    updateReview,
    deleteReview,

} = require("../controllers/reviewControllers");

router.post("/",auth, addReview);
router.get("/:productId", getProductReviews);
router.put("/:id",auth, updateReview);
router.delete("/:id",auth,deleteReview);

module.exports = router;
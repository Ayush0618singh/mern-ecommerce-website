const Cart = require("../models/cart");

//Add Product to Cart
const addToCart = async (req, res) => {
    try {
        const { product, quantity } = req.body;

        //Check if product already exists in user's cart
        let cartItem = await Cart.findOne({
            user: req.user.id,
            product,
        });

        if (cartItem) {
            cartItem.quantity += quantity;
            await cartItem.save();

            return res.status(200).json({
                success: true,
                message: "Cart Quantity Updated",
                cart: cartItem,
            });
        }

        const cart = await Cart.create({
            user: req.user.id,
            product,
            quantity,
        });

        res.status(201).json({
            success: true,
            message: "Product Added To Cart",
            cart: CartItem,

        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//Get Logged In User Cart
const getCart = async(req, res) => {
    try {
        const cart = await Cart.find({
            user: req.user.id,

        }).populate("product");

        res.status(200).json({
            success: true,
            count: cart.length,
            cart,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    addToCart,
    getCart,
};
const Product = require("../models/Product");

//Add Product
const addProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            brand,
            stock,
            image,
            isFeatured,

        } = req.body;

        if (!name || !description || !price || !category || !stock) {
            return res.status(400).json({
                success: false,
                message: " Please fill all required fields"
            });
        }
        const product = await Product.create({
            name,
            description,
            price,
            category,
            brand,
            stock,
            image,
            isFeatured,
        });

        res.status(201).json({
            success: true,
            message: "Product Added Successfully",
            product,
        });

    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};

//Get All Product
const getProducts = async ( req, res) => {
    try {
        const products = await Product.find().populate("category");

        res.status(200).json({
            success: true,
            count: getProducts.length,
            products,
        });

    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//Get Single Product
const getSingleProduct = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id).populate("category");

        if(!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found",
            });
        }

        res.status(200).json({
            success: true,
            product,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};

//Delete Product
const deleteProduct = async ( req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if(!product) {
            return res.status(404).json ({
                success: false,
                message: "Product Not Found",
                
            });
        }

        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: " Product Deleted Successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    addProduct,
    getProducts,
    getSingleProduct,
    deleteProduct,
};


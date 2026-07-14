const Category = require ("../models/Category");

//Add Category
const addCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        if( !name ) {
            return res.status(400).json({
                success: false,
                message: "Category name is required",
            });
        }
        const existingCategory = await Category.findOne({ name });

        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Category already exists",
            });
        }

        const category = await Category.create({
            name,
            description,
        });

        res.status(201).json({
            success: true,
            message: "Category Added Successfully",
            category,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};

//Get All Categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        res.status(200).json({
            success: true,
            count: categories.length,
            categories,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    addCategory,
    getCategories,
};
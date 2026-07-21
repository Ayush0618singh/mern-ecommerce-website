const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");


//Cloudinary Storage Configuration
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "mern-ecommerce-products",     //Cloudinary Folder Name
        allowed_formats: ["jpg", "png", "webp"],
    },

});

//Multer Middleware
const upload = multer({
    storage,
});

module.exports = upload;
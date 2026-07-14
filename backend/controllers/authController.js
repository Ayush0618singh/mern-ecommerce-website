 const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Register User
const registerUser = async (req, res) => {
    try {
        console.log(req.body);
        const{name, email, password} = req.body;

        //check if all fields are filled
        if(!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        //Check eisting User
        const existingUser = await User.findOne({ email });

        if(existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        //Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        //Create User
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            success:true,
            message: "User Registered Successfully",
            user,
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//Login User
const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        //Find User
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({
                message: "Invalid Email",
            });
        }

        //Comapare Password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({
                message: "Invalid Password",
            });
        }
        
        //Generate JWT Token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            success: true,
            message: "Login Successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    }catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
        });
    }

};

module.exports = {
    registerUser,
    loginUser,
};

const Razorpay = require("razorpay");

//Razorpay Configuration
const razorpay = new Razorpay({

    //API key Id
    key_id: process.env.RAZORPAY_KEY_ID,

    //API Secret Key
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = razorpay;
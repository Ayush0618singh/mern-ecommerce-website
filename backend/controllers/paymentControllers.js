const Order = require("../models/order");
const Razorpay = require("../config/razorpay");
const crypto = require("crypto");

//Create Razorpay Order
const createPaymentOrder = async(req,res) => {
    try {
        const{ amount } = req.body;

        //Amount Validation
        if(!amount) {
            return res.status(400).json({
                success: false,
                message: "Amount is required",
            });
        }
        ///Razorpay Options
        const options = {
            amount: amount* 100,    //Convert ₹ to Paisa
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        //Create Order
        const order = await Razorpay.orders.create(options);
        return res.status(200).json({
            success: true,
            order,
        });
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//Verify Payment Signature
const verifyPayment = async(req, res) => {
    try {
        const {
            orderId,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,

        } = req.body;

        //Generate Signature
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
        
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign)
            .digest("hex");

            //Comapre Signature
            if(expectedSignature === razorpay_signature) {
                //const { orderId } = req.body;
                const order = await Order.findById(orderId);

                if (order) {

                    //Payment Success
                    order.isPaid = true;
                    
                    // Save Razorpay Payment ID
                    order.paymentId = razorpay_payment_id;
                    
                    // Save Payment Time
                    order.paidAt = new Date();

                    // Update Order Status
                    order.orderStatus = "Processing";
                    await order.save();
                }
                return res.status(200).json({
                    success: true,
                    message: "Payment Verified Successfully",
                    order,

                });
            }

            //Signature Wrong
            return res.status(400).json({
                success: false,
                message: "Invalid Payment Signature",
            });
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createPaymentOrder,
    verifyPayment,
};
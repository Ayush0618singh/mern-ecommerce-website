const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                product:  {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,

                },

                quantity: {
                    type: Number,
                    required: true,
                    default: 1,
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
        },
        shippingAddress: {
            type : String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        paymentMethod: {
            type: String,
            enum: ["COD", "UPI", "Card"],
            default: "COD",
        },

        orderStatus:{
            type: String,
            enum:["Pending","Processing","Shipped","Delivered"],
            default: "Pending",
        },
        
        isPaid: {
            type: Boolean,
            default: false,
        },
        paidAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = 
    mongoose.models.Order || mongoose.model("Order",orderSchema);
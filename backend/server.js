const orderRoutes = require("./routes/orderRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
 
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const auth = require("./middleware/auth");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
    res.send("E-Commerce API Running...");
});

//Protected Route
app.get("/api/profile", auth, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route",
        user: req.user,
    });
});

const PORT = process.env.PORT  || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
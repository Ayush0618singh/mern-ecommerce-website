const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access Denied. No Token Provided",
            });
        }
        const jwtToken = token.startsWith("Bearer ")
        ? token.split(" ")[1]
        : token;

        console.log("Authorization Header:", req.headers.authorization);
        console.log("JWT Secret:", process.env.JWT_SECRET);

        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        console.log(decoded);

        req.user = decoded;
        next();

    }catch (error) {
        console.log(error);

        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }

};

module.exports = auth;


 
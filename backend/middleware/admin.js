const admin = (req, res, next) => {
    console.log(req.user);
    if(req.user.role !== "admin") {

        return res.status(403).json({
            success: false,
            message: "Access Denied! Admin Only",
        });
    }

    next();
};

module.exports = admin;
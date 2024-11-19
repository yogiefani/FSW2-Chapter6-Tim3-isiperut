const jwt = require("jsonwebtoken");
const { users } = require("../models");

const protectedMiddleware = async (req, res, next) => {
    try{
        const bearerToken = req.headers.authorization;
        if(!bearerToken) {
            return res.status(401).json({
                status: "Failed",
                message: "Your token is missing!",
                isSuccess: false
            })
        }
        
        const token = bearerToken.split("Bearer ")[1];

        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const User = await users.findByPk(payload.userId);
        if(!User){
            return res.status(404).json({
                status: "Failed",
                message: "User not found",
                isSuccess: false
            })
        }
        console.log(User);
        req.user = User;
        next();
    } catch(err){
        return res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false
        })
    }
}

const adminMiddleware = async (req, res, next) => {
    try{
        if(req.user.role == "user"){
            return res.status(401).json({
                status: "Failed",
                message: "Not Authorized as an Admin",
                isSuccess: false
            })
        }

        next();
    } catch (err) {
        return res.status(401).json({
            status: "Failed",
            message: "Not Authorized, no token",
        })
    }
}

module.exports = {protectedMiddleware, adminMiddleware };
const jwt = require("jsonwebtoken");
const secrets = require('../config/secrets.js')


module.exports = ( req, res, next ) => {
    const {authorization} = req.headers;
    const secret = secrets.jwtSecret ;
console.log(authorization)
    if (authorization){
        jwt.verify(authorization, secret, (err, decodedToken) => {
            if(err){
                 res.status(401).json({ message: "You cannot login."})
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        })
    } else {
        console.log("else at the end")
        res.status(401).json({ message: "You shall not pass."})
    }
}
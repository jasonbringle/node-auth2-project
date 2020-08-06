const jwt = require("jsonwebtoken");
const secrets = require('../config/secrets.js')


module.exports = ( req, res, next ) => {
    const token = req.headers.authorization;
    const secret = secrets.jwtSecret ;

    if (token){
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
                 res.status(401).json({ message: "You cannot login."})
            } else {
                req.jwt = decodedToken;
                next();
            }
        })
        next();
    } else {
        res.status(401).json({ message: "You shall not pass."})
    }
}
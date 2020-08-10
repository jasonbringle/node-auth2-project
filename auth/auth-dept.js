function checkDept(dept) {
    return function (req, res, next){
        if (req.decodedToken.department && req.decodedToken.department === dept){
            next();
        }else {
            res.status(403).json({you: 'are the wrong department'})
        }
    }
}

module.exports = checkDept;
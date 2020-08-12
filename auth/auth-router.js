const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const Db = require("../users/users-model.js");
const { isValid } = require("../users/user-service.js");

const secrets = require('../config/secrets.js')
const restricted = require("./restricted-middleware")

router.post("/register",(req,res) => {
    const creds = req.body
    const hash = bcrypt.hashSync(creds.password, 14)
    creds.password = hash
    Db.register(creds)
        .then(added => {
            console.log(added)
            res.status(201).json(added)
        })
        .catch(err => {
            res.status(500).json({message: 'You did not create a user'})
        })
})

router.get("/users", restricted, (req, res) => {
  Db.getUsers()
    .then(users => {
        console.log(users)
        res.status(200).json(users)
    })
    .catch(err => res.send(err));
});

router.post('/login', (req,res) => {
    const body = req.body
    if(isValid(body)){
    Db.findUser(body)
        .then(user => {
            if(user && bcrypt.compareSync(body.password, user.password)){
                const token = generateToken(user)
                res.status(200).json({ message: `${user.user} is logged in!`,
                    token
                })
            } else {
                res.status(401).json({errormessage: "You shall not pass!"})
            }
        })
        .catch(err => {
            res.status(500).json({ errormessage: "Could not get the user"})
        })} else {
            res.status(400).json({
              message: "please provide username and password and the password shoud be alphanumeric",
            });
          }
})

function generateToken(user){
    const payload = {
        user: user.user,
        id: user.id,
        department: user.department
    }
     const options ={
         expiresIn: '8h',
     }

     const secret = secrets.jwtSecret;
    return jwt.sign(payload, secrets.jwtSecret, options)
}

router.delete('/logout',(req, res) => {
    console.log(token)
    if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
        res.status(200).json({message: 'You have been logged out'})
      } else {
          res.end()
      }
});

module.exports = router;
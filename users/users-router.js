const router = require("express").Router();
const Users = require("./users-model.js");
const checkDept =require("../auth/auth-dept")


router.get("/", /*checkDept("Guitars"),*/(req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});


module.exports = router;
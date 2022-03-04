const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const Users = require('../models/userInfo.js')


router.post('/createaccount', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Users.create(req.body, (err, createdUser) => {
    if(err){
      res.json('User already exists')
    } else {
      console.log('user is created', createdUser);
      res.json(createdUser)
    }
  })
});

router.put('/login', (req, res) => {
  console.log(req.body);
  Users.findOne({username: req.body.username}, (err, foundUser) => {
    if(err) {
      res.json('Oops, there was an error. Please try again')
    } else {
      if(!foundUser){
        res.json('Username and password do not match. Please try again.')
      } else if(bcrypt.compareSync(req.body.password, foundUser.password)) {
        res.json({username: foundUser.username})
      } else {
        res.json('Username and password do not match. Please try again.')
      }
    }
  })
});


router.get('/', (req,res) => {
  Users.find({}, (err, foundUsers) => {
    res.json(foundUsers)
  })
})

router.get('/findOne/:username', (req,res) => {
  Users.findOne({username:req.params.username}, (err, foundUser) => {
    res.json(foundUser)
  })
  // res.send('okay')
})

module.exports = router

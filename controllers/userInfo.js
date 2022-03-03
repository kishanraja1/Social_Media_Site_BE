const express = require('express')
const router = express.Router()
const Users = require('../models/userInfo.js')


router.post('/', (req,res) => {
  Users.create(req.body, (err, createdUser) => {
    res.json(createdUser)
  })
})


router.get('/', (req,res) => {
  Users.find({}, (err, foundUsers) => {
    res.json(foundUsers)
  })
})

module.exports = router

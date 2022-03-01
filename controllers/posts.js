const express = require('express')
const router = express.Router()
const Posts = require('../models/posts.js')


router.post('/', (req,res) => {
  Posts.create(req.body, (err, createdPost) => {
    res.json(createdPost)
  })
})


router.get('/', (req,res) => {
  Posts.find({}, (err, foundPosts) => {
    res.json(foundPosts)
  })
})

module.exports = router

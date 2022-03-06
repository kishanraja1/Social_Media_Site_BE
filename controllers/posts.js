const express = require('express')
const router = express.Router()
const Posts = require('../models/posts.js')

router.put('/:id', (req, res) => {
  Posts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPost)=>{
    res.json(updatedPost)
  })
})

router.delete('/:id', (req,res) => {
  Posts.findByIdAndRemove(req.params.id, (err, deletedPost) => {
    res.json(deletedPost)
  })
})


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


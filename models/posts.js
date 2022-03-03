const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: String,
  post: String,
  checking: Boolean,
  likes: Number,
  dislikes: Number
})


const Posts = mongoose.model('Post', postSchema)

module.exports = Posts

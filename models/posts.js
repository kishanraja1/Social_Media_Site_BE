const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: String,
  post: String,
  checking: Boolean
})


const Posts = mongoose.model('Post', postSchema)

module.exports = Posts

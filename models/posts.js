const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  post: String,
  checking: Boolean,
  likes: Number,
  dislikes: Number,
  likeBoolean: Boolean,
  dislikeBoolean:Boolean,
},{timestamps:true})

const Posts = mongoose.model('Post', postSchema)

module.exports = Posts

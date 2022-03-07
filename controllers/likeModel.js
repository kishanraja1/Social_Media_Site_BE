const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
  userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
  postID: {type: mongoose.Schema.Types.ObjectId, ref: 'Post', required:true},
  likeBoolean:Boolean,
  dislikeBoolean:Boolean

},{timestamps:true})

const Posts = mongoose.model('Like', postSchema)

module.exports = Posts
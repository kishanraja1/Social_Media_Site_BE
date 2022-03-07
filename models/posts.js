const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
  post: String,
  checking: Boolean,
  likes: Number,
  dislikes: Number,
  comments: [{body: String}],
  date: {type: Date, default: Date.now},
  react:[{rAuthor: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true, default:"622155e2385f63508588e9a0"},
    likeBoolean: {type:Boolean, required:true, default:false},
    dislikeBoolean:{type:Boolean, required:true, default:false}
  }]
},{timestamps:true})

const Posts = mongoose.model('Post', postSchema)

module.exports = Posts

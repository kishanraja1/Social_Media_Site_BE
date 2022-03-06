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
  comments: [{body: String}],
  date: {type: Date, default: Date.now},
  react:[{rAuthor: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    likeBoolean: {type:Boolean, default:false},
    dislikeBoolean:{type:Boolean, default:false}
  }]
},{timestamps:true})

const Posts = mongoose.model('Post', postSchema)

module.exports = Posts

// type:String, unique:true
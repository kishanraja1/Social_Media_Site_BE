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
  react:[]
},{timestamps:true})

const Posts = mongoose.model('Post', postSchema)

module.exports = Posts

// type:String, unique:true

// react:[{rAuthor: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true, default:"622155e2385f63508588e9a0"},
//     likeBoolean: {type:Boolean, required:true, default:false},
//     dislikeBoolean:{type:Boolean, required:true, default:false}
//   }]
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim:true},
  password: String,
  currentUserPosts:[{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  // likedPosts:[{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}],
})


const Users = mongoose.model('User', userSchema)

module.exports = Users

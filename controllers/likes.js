const express = require('express');
const res = require('express/lib/response');
const router = express.Router()
const Posts = require('../models/posts.js')



// occurs on login/create account will add user to each post
// inefficient??
// ON LOGIN ROUTE
router.get('/default/:id' , (req, res) => {
    const go = async (add) => {
        await  Posts.updateMany({"react.rAuthor":{ $nin: add}}, 
          {$push:{ react:{rAuthor:add, likeBoolean:false, dislikeBoolean:false}}
      })
      }
      go(req.params.id)
      res.json('good')
});
// http://localhost:3000/likes/62252695b18708bb88313c28/62241cb89c51dafabbc6e07c/dislike


// LIKE ROUTE
router.put('/:userID/:postID', async (req,res) => {

  let post =  await Posts.findById(req.params.postID)
  for (let i of post.react){
      if (i.rAuthor == req.params.userID){
          if(i.likeBoolean){
            
          }else if (i.dislikeBoolean){
            post.likes += 1
            post.dislikes -=1
            i.likeBoolean= true
            i.dislikeBoolean=false
          }else if(!i.dislikeBoolean){
              post.likes +=1
              i.likeBoolean=true
          }
      }
  }
   await post.save()
   res.send(post)
})

// DISLIKE ROUTE
router.put('/:userID/:postID/dislike', async (req,res) => {

    let post =  await Posts.findById(req.params.postID)
    for (let i of post.react){
        if (i.rAuthor == req.params.userID){
            if(i.dislikeBoolean){              
            }else if (i.likeBoolean){
              post.likes -= 1
              post.dislikes +=1
              i.likeBoolean = false
              i.dislikeBoolean=true
            }else if(!i.likeBoolean){
                post.dislikes +=1
                i.dislikeBoolean=true
            }
        }
    }
     await post.save()
     res.send(post)
  })

module.exports = router
const express = require('express');
const tagsRouter = express.Router();

const {getAllTags, getPostsByTagName} =  require('../db');

tagsRouter.get('/:tagsName/posts', async (req,res, next) =>{
    const {tagName} = req.params;
    console.log(tag)
    try{
        const allPosts = await getPostsByTagName(tagName);
        const posts = allPosts.filter(post => {
            return post.active || (req.user && post.author.id === req.user.id);
        })

        res.send({posts: posts});

    } catch ({name, message}){
        next({name, message});
    }


    });


module.exports = tagsRouter;


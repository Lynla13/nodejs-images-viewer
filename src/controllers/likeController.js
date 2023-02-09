import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import likeModel from "../model/likeModel";
//import connection from "../model/baseModel";


async function showAllLike (req,res) {
    let post_id = req.body.post_id;
    let like = await likeModel.showAllLike(post_id);
    let likeCount = like.length;
    res.send ({Like:likeCount});
    res.end();
}

async function showLike(req,res) {
    let username = req.session.username || 'nonSignUser';
    let post_id = req.body.post_id;
    let showLikes = await likeModel.showLike(post_id,username);
    if (showLikes.length > 0){
        res.send ('Liked');
    }else 
    {
        res.send ('NoLike');
    }
    res.end()    
}

async function insertLike(req,res) {
    let username = req.session.username || 'nonSignUser';
    let post_id = req.body.post_id;
    likeModel.insertLike(post_id,username);
    res.end()  
}

async function removeLike(req,res) {
    let username = req.session.username || 'nonSignUser';
    let post_id = req.body.post_id;
    likeModel.removeLike(post_id,username);
    res.end()  
}






//DisLike
async function showAllDislike (req,res) {
    let post_id = req.body.post_id;
    let dislike = await likeModel.showAllDislike(post_id);
    let dislikeCount = dislike.length;
    res.send ({Dislike:dislikeCount});
    res.end();
}

async function showDislike(req,res) {
    let username = req.session.username || 'nonSignUser';
    let post_id = req.body.post_id;
    let showLikes = await likeModel.showDislike(post_id,username);
    if (showLikes.length > 0){
        res.send ('Disliked');
    }else 
    {
        res.send ('NoDislike');
    }
    res.end()    
}

async function insertDislike(req,res) {
    let username = req.session.username || 'nonSignUser';
    let post_id = req.body.post_id;
    likeModel.insertDislike(post_id,username);
    res.end()  
}

async function removeDislike(req,res) {
    let username = req.session.username || 'nonSignUser';
    let post_id = req.body.post_id;
    likeModel.removeDislike(post_id,username);
    res.end()  
}


module.exports = {
    showLike,insertLike,removeLike,removeDislike,insertDislike,showDislike,showAllDislike,showAllLike
} 
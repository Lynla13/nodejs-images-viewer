import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
import postModel from "../model/postModel";
//import connection from "../model/baseModel";
const akaneko = require('akaneko');

async function hentai(req,res) {
 
    let postData = await postModel.showPost();
    for (let i=postData.length-1; i>=0;i--) {
      res.write (`<div id ="image-show-out-div"> <img src ="`+postData[i].image+`" id ="image-show-out"> </div>`);
  }
  
  let picsNum = 2
  for (let j =0; j<picsNum; j++) {
    let imageName = await akaneko.nsfw.hentai();
    let authorAPI = 'akaneko';
    let postContent ="hentai!";
    let postTag = "hentai";
    postModel.insertPostForAPI(authorAPI, postContent,imageName,postTag);
    }
  res.write (`<style> 
  #loading-img {
    display:none
  }
  </style>`)
  res.end();
}

async function hentai1(req,res) {
let picsNum = 4
for (let j =0; j<picsNum; j++) {
  res.write (`<div id ="image-show-out-div"> <img src ="`+await akaneko.nsfw.hentai()+`" id ="image-show-out"> </div>`);
  }
res.write (`<style> 
#loading-img {
  display:none
}
</style>`)
res.end();
}
// push link to obkect
module.exports = {
  hentai,hentai1
} 
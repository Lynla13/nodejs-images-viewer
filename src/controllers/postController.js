import file from "@babel/core/lib/transformation/file/file";
import { post } from "jquery";
import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import postModel from "../model/postModel";
import pageModel from "../model/pageModel";

const fs     = require('fs');


//Tải 1 vài trang sử dụng thông tin từ bảng profile
function postContent(req, res) {
    let newImageName = 'lynla _'+ Date.now()+'_.jpg';
    let path     = '/CODE/NodeJs-Project/nodejs-40-feature-basic/src/public/files/imgs/'+req.body.filename;
    let image    = req.body.file ;
    let data     = image.split(',')[1];
    fs.writeFileSync(path,data,{encoding:'base64'});
    let temp        = fs.readFileSync(path);
    let buff        = Buffer.from(temp);
    let base64data  = buff.toString('base64');
    fs.renameSync('/CODE/NodeJs-Project/nodejs-40-feature-basic/src/public/files/imgs/'+req.body.filename, '/CODE/NodeJs-Project/nodejs-40-feature-basic/src/public/files/imgs/'+newImageName);
    res.json({msg:'success',data:base64data, imageName:newImageName});
    //save to database
    // postContent = req.body.postContent ||"";
    // image = newImageName;
    // post_tag = req.body.post_tag ||"";
    // postModel.insertPost('nonSignUser', postContent,image,post_tag);
}

function getPage (req,res) {
    let user = req.params.user || req.session.username || '';
    let urlAcess = req.originalUrl;
    let pageId = "/post";
    pageModel.getPageBy_Id(pageId,user).then(Page => {
    return res.render('index.ejs', {Page: Page, session: req.session.loggedin ? req.session.username: '' }); 
  })   
}
function deletePics (req,res) {
    try {
        fs.unlinkSync(`/CODE/NodeJs-Project/nodejs-40-feature-basic/src/public/files/imgs/`+req.body.imageName+``);
        console.log('success');
        return res.send (`<script> window.location.href = '/' </script> `)
      } catch (error) { 
        console.log(error);
      }
}
module.exports = {
    postContent,getPage,deletePics
} 
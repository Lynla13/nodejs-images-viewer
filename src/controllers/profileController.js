import { Session } from "express-session";
import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
import profileModel from "../model/profileModel";

function getPage(req, res) {
    let user = req.params.user || req.session.username || '';
    let urlAcess = req.originalUrl;
    let pageId = urlAcess.slice(0,2);
    pageModel.getPageBy_Id(pageId,user).then(Page => {
    getProfileInfo(req, res);
    return res.render('index.ejs', {Page: Page , session: req.session.loggedin ? req.session.username: '' }); 
  })   
}


function getProfileInfo(req, res) {
    if (req.params.user != null) {
        let user = req.params.user;
       
       profileModel.getByUsername (user).then(profile => {
        if (profile [0].username == req.session.username) {
            res.send (`<div id="profile_res" style="background-image: url(files/imgs/download.jpg);">
            <img src="files/imgs/`+profile [0].profile_ava+`" id ="profile_ava_res" alt="avavtar">
            <p id ="fullname_show">`+profile [0].fullname+`</p>
            <p id ="username_show" >@`+profile [0].username+`</p>
            <p id ="joindate_show" class="info-text-res">JoinDate: `+profile [0].joinday+`</p>
            <p id ="followers_show" class="info-text-res">Follower: </p>
            <p id ="followings_show" class="info-text-res">Following : </p>
            </div>`);
        }else {
            res.send (`<div id="profile_res" style="background-image: url(files/imgs/download.jpg);">
            <img src="files/imgs/`+profile [0].profile_ava+`" id ="profile_ava_res" alt="avavtar">
            <p id ="fullname_show">`+profile [0].fullname+`</p>
            <p id ="username_show" >@`+profile [0].username+`</p>
            <p id ="joindate_show" class="info-text-res">JoinDate: `+profile [0].joinday+`</p>
            <p id ="followers_show" class="info-text-res">Follower: </p>
            <p id ="followings_show" class="info-text-res">Following : </p>
            <div class="follow-info-swt-btn">
            <button type="button" id="round-button"><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div> 
            </div>`);   
        }
        
         })
    }  else {
        res.send (`<p style ="color: red"> Fuck you</p>`);

    }     
}


module.exports = {
    getPage
}
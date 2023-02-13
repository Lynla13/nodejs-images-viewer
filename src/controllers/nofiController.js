//Viết hàm in ra thông báo
//Viết hàm update tình trạng thông báo.

import nofiModel from "../model/nofiModel";


async function showNofi(req,res) {
    let username = req.session.username || '';
    let showNofi= await nofiModel.showUserNofi(username);
   return res.render ('sideBar/nofi.ejs',{showNofi:showNofi}) 
}

//Insert Nofi
async function insertNofi(req,res) {
    let username = req.session.username || '';
    let content = req.body.content;
    nofiModel.insertUserNofi(username,content);
}

//Cập nhật tình trạng nofi
async function updateNofi(req,res) {
    let username = req.session.username || '';
    nofiModel.updateNofiByCondi ('check',username);
}

//thông báo nếu có nofi mới
async function showNofiIcon(req,res) {
    let username = req.session.username || '';
    let getUnreadNofi = await nofiModel.nofiModel(username);
    if (getUnreadNofi.length >= 0) {
        return  res.send ('unRead');
    }else {
        return  res.send ('readed')
    }
}





module.exports = {
    showNofi,updateNofi,showNofiIcon,insertNofi
} 
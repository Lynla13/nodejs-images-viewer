//Viết hàm in ra thông báo
//Viết hàm update tình trạng thông báo.

import nofiModel from "../model/nofiModel";

//Hiển thị những nofi chưa đọc
async function showNofi(req,res) {
    let username = req.session.username || '';
    let getUnreadNofi = await nofiModel.getUnreadNofi(username);
   return res.render ('sideBar/nofi.ejs',{getUnreadNofi:getUnreadNofi}) 
}

//Insert Nofi
async function insertNofi(req,res) {
    let username = req.body.username ;
    let content = req.body.content;
    nofiModel.insertUserNofi(username,content);
}

//Cập nhật tình trạng nofi
async function deleteNofi(req,res) {
    let username = req.session.username || '';
    nofiModel.deleteNofiByCondi (username);
}

//thông báo nếu có nofi mới
async function showNofiIcon(req,res) {
    let username = req.session.username || '';
    let getUnreadNofi = await nofiModel.getUnreadNofi(username);
    if (getUnreadNofi.length > 0) {
        return  res.send ('unRead');
    }else {
        return  res.send ('readed')
    }
}





module.exports = {
    showNofi,deleteNofi,showNofiIcon,insertNofi
} 
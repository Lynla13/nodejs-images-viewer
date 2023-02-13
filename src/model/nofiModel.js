import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let table = 'nofi';
//Viết các chức năng cho hệ thống thông báo
//insert thông báo và hiện thị thông báo

//Hiện thị thông báo
function showUserNofi(username) {
    let condi ="username = '"+username+"'";
    return ( baseModel.getByCondition(table, condi));
}

//Hiển thị những thông báo chưa đọc (đếm và thông báo) 
function getUnreadNofi (username) {
    let condi ="username = '"+username+"'and checked is null";
    return ( baseModel.getByCondition(table, condi));
}

//Insert thông báo
function insertUserNofi(username,content)  {
    let tableContent =`username,content`
    let values1 ='"'+username+'","'+content+'"' ;
    return ( baseModel.insertTable(table,tableContent,values1) );
}

//Cập nhật trạng thái của nofi khi đã đọc
function updateNofiByCondi (check,username) {
    let value =`checked = '`+check+`'`
    let condi = `username = '`+username+`'`
    return ( baseModel.updateByCondi(table,value,condi) );
}
module.exports = {
    showUserNofi,insertUserNofi,getUnreadNofi,updateNofiByCondi
}
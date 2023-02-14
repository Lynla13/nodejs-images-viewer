import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let table = 'nofi';
//Viết các chức năng cho hệ thống thông báo
//insert thông báo và hiện thị thông báo

//Hiển thị những thông báo chưa đọc (đếm và thông báo) 
function getUnreadNofi (username) {
    let condi ="username = '"+username+"' order by nofi_time desc";
    return ( baseModel.getByCondition(table, condi));
}

//Insert thông báo
function insertUserNofi(username,content)  {
    let tableContent =`username, content`
    let values1 ='"'+username+'","'+content+'"' ;
    return ( baseModel.insertTable(table,tableContent,values1) );
}

//Xóa nofi khi đã đọc
function deleteNofiByCondi (username) {
    let condi = `username = '`+username+`'`
    return ( baseModel.deleteCondi (table, condi) );
}

module.exports = {
    insertUserNofi,getUnreadNofi,deleteNofiByCondi
}
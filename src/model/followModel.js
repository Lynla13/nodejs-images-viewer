import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let follow = 'follow';
//viết các chức năng liên quan đến follow
//- follow
//-unfollow

//đếm những người mà user theo dõi
function showAllFollow(username) {
    let condi ="username = '"+username+"'";
    return ( baseModel.getByCondition(follow, condi));
}
//Lấy những người theo dõi user
function showAllFollower(username) {
    let condi ="following = '"+username+"'";
    return ( baseModel.getByCondition(follow, condi));
}



function showAllFollowing(username) {
    let condi ="username = '"+username+"'";
    return ( baseModel.getByCondition(follow, condi));
}
//Hiện follow
function showFollow (username,following) {
    let condi ="username = '"+username+"' and following ='"+following+"'";
    return ( baseModel.getByCondition(follow, condi));
}
//Thêm follower
function insertFollow(username,following)  {
    let tableContent =`username,following`
    let values1 ='"'+username+'","'+following+'"' ;
    return ( baseModel.insertTable(follow,tableContent,values1) );
}
//Xóa follower
function removeFollow(username,following)  {
    let condi ="username = '"+username+"'and following = '"+following+"'";
    return ( baseModel.deleteCondi (follow , condi));
}
module.exports = {
 insertFollow,removeFollow,showAllFollow,showFollow,showAllFollower,showAllFollowing
}
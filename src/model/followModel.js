import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let users = 'users';
let profile = 'profile';

async function getByUsername(username)  {
    let condition = 'username = "' + username + '"';
    return Promise.resolve ( await baseModel.getByCondition(users,condition));
}

 function insertUser_Profile(username, pass,email)  {
    let values1 ='"'+username+'","'+pass+'","'+email+'","0"' ;
    let userInfo ="'"+username+"'";
    return ( baseModel.insertTwoTable(users,profile,values1,userInfo) );
}

function insertUser_UserWall(username,following,post_tag)  {
    let tableContent =`username,following,post_tag`
    let values1 ='"'+username+'","'+following+'","'+post_tag+'"' ;
    return ( baseModel.insertTable('userwall',tableContent,values1) );
}
module.exports = {
    insertUser_Profile,getByUsername,insertUser_UserWall
}
import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let profile = 'profile';

async function getByUsername(username)  {
    let condition = 'username = "' + username + '"';
    return Promise.resolve ( await baseModel.getByCondition(profile,condition));
}

 function updateUser_Profile(username, pass,email)  {
    let values1 ='"'+username+'","'+pass+'","'+email+'","0"' ;
    let userInfo ="'"+username+"'";
    return ( baseModel.insertTwoTable(users,profile,values1,userInfo) );
}
  
module.exports = {
    updateUser_Profile,getByUsername
}
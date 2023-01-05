import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let users = 'users';

 async function getByUsername_Pass(username, pass)  {
    let condition = 'username = "' + username + '" and pass = "' + pass + '"';
    return Promise.resolve ( await baseModel.getByCondition(users,condition));
}
  
module.exports = {
    getByUsername_Pass
}
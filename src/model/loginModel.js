import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let user = 'user';

 async function getByUsername_Pass(username, pass)  {
    let condition = 'username = "' + username + '" and pass = "' + pass + '"';
    return Promise.resolve ( await baseModel.getByCondition(user,condition));
}
  
module.exports = {
    getByUsername_Pass
}
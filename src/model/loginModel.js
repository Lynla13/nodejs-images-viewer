import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

// * Important promise function
let user = 'user';

let table = 'webpage';

//Call Webpage by ID
 async function getByLoginPageBy_Id(idPage)  {
    let condition = 'id_page = "' + idPage + '"';
    return Promise.resolve ( await baseModel.getByCondition(table,condition));
}

 async function getByUsername_Pass(username, pass)  {
    let condition = 'username = "' + username + '" and pass = "' + pass + '"';
    return Promise.resolve ( await baseModel.getByCondition(user,condition));
}
  
module.exports = {
    getByUsername_Pass,getByLoginPageBy_Id
}
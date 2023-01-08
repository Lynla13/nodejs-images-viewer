import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let table_1 = 'webpage';
let table_2 = 'profile';
let view_1= 'webpageAndProfile'
//Call Webpage and  one more table
 async function getPageBy_Id(pageId,user)  {
    let condition = 'username = "' + user + '" and id_page = "' + pageId + '"';
    return Promise.resolve ( await baseModel.getByCondition(view_1,condition));
}

async function getAllPage()  {
    return Promise.resolve ( await baseModel.getAll(table));
}
 
module.exports = {
 getPageBy_Id,getAllPage
}
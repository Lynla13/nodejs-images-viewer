import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let table = 'webpage';

//Call Webpage by ID
 async function getPageBy_Id(idPage)  {
    let condition = 'id_page = "' + idPage + '"';
    return Promise.resolve ( await baseModel.getByCondition(table,condition));
}

async function getAllPage()  {
    return Promise.resolve ( await baseModel.getAll(table));
}
 
module.exports = {
 getPageBy_Id,getAllPage
}
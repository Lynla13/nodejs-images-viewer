import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let table = 'post';

 function insertPost(username, postContent,image,post_tag)  {
    let tableColums ='username,post_content,image,post_tag' ;
    let values ="'"+username+"','"+postContent+"','files/imgs/"+image+"','"+post_tag+"'";
    return ( baseModel.insertTable(table,tableColums,values));
}
function insertPostForAPI(username, postContent,image,post_tag)  {
    let tableColums ='username,post_content,image,post_tag' ;
    let values ="'"+username+"','"+postContent+"','"+image+"','"+post_tag+"'";
    return ( baseModel.insertTable(table,tableColums,values));
}

async function showPost()  {
    return Promise.resolve ( await baseModel.getAll(table));
}
  
module.exports = {
    insertPost,showPost,insertPostForAPI
}
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
    let values =`'`+username+`','`+postContent+`','`+image+`','`+post_tag+`'`;
    return ( baseModel.insertTable(table,tableColums,values));
}

async function showPost(limit,offset,sort)  {
    let orderBy = 'post_time '+sort+'';
    return Promise.resolve ( await baseModel.getAll(table,orderBy,limit,offset));
}

async function showPostByPostTag(post_tag,offset,limit)  {
    let condition = `post_tag = "`+post_tag+`" limit `+offset+`,`+limit+``;
    return Promise.resolve ( await baseModel.getByCondition(table,condition));
}
async function showPostByPostTagNoLimit(post_tag,sort)  {
    let condition = `post_tag = "`+post_tag+`" order by post_time `+sort+``;
    return Promise.resolve ( await baseModel.getByCondition(table,condition));
}

async function showPostNoLimit()  {
    return Promise.resolve ( await baseModel.getCount('post_id',table));
}

async function showTags()  {
    return Promise.resolve ( await baseModel.getAllNoLimit('tags'));
}
  

async function showPostTag(tags)  {
    let condition = `tags = "`+tags+`"`;
    return Promise.resolve ( await baseModel.getByCondition('tags',condition));
}
async function showPostID(id)  {
    let condition = `post_id = "`+id+`"`;
    return Promise.resolve ( await baseModel.getByCondition(table,condition));
}


async function deletePostbyCondi (image){
    let condi = `image= '`+image+`'`;
    return Promise.resolve ( await baseModel.deleteCondi(table,condi));
}
module.exports = {
    insertPost,showPost,insertPostForAPI,showPostNoLimit,
    showPostByPostTag,showTags,showPostTag,deletePostbyCondi,showPostByPostTagNoLimit,showPostID
}
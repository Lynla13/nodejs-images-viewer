import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
//import connection from "../model/baseModel";
const akaneko = require('akaneko');

async function hentai(req,res) {

    // Get SFW Neko Images, uwu //
    res.send (` <img src="`+await akaneko.nsfw.bdsm()+`" alt="" style="max-width: 500px; max-height: 500px;">
    <img src="`+await akaneko.nsfw.bdsm()+`" alt="" style="max-width: 300px; max-height: 300px;">
    <img src="`+await akaneko.nsfw.bdsm()+`" alt="" style="max-width: 300px; max-height: 300px;">
    <img src="`+await akaneko.nsfw.bdsm()+`" alt="" style="max-width: 300px; max-height: 300px;">
    <img src="`+await akaneko.nsfw.bdsm()+`" alt="" style="max-width: 300px; max-height: 300px;">
    <img src="`+await akaneko.nsfw.bdsm()+`" alt="" style="max-width: 300px; max-height: 300px;">
    <img src="`+await akaneko.nsfw.bdsm()+`" alt="" style="max-width: 300px; max-height: 300px;">
    <img src="`+await akaneko.nsfw.bdsm()+`" alt="" style="max-width: 300px; max-height: 300px;">
    `)
    
  
    // Get Lewd Neko (NSFW), owo //
    // console.log("Lewd Neko:" + await akaneko.lewdNeko());
  
    // // Lewd Bomb me onii-san~~ //
    // console.log("Lewd Bomb: " + await akaneko.lewdBomb(5));
  
    // // Get other NSFW Images //
    // console.log("BDSM: " + await akaneko.nsfw.bdsm());
    // console.log("Maid: " + await akaneko.nsfw.maid());
    // console.log("Hentai: " + await akaneko.nsfw.hentai());
  }
  

module.exports = {
  hentai
} 
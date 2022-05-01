const Trex = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');


Trex.addrex({pattern: 'check', fromMe: false, deleteCommand: true, desc: 'verify 👿',}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] ="08/29 🇱🇰 𝗗𝗥𝗔𝗚𝗢𝗡 𝗫  𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🕊 CONFIRMED 2007|>";
    r_text[2] ="02/14 🇱🇰 𝗗𝗥𝗔𝗚𝗢𝗡 𝗫  𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🕊 CONFIRMED 1980|>";
    r_text[3] ="10/05 🇱🇰 𝗗𝗥𝗔𝗚𝗢𝗡 𝗫  𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🕊 CONFIRMED 1999|>";
    r_text[4] ="07/31 🇱🇰 𝗗𝗥𝗔𝗚𝗢𝗡 𝗫  𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🕊 CONFIRMED 1966|>";
    r_text[5] ="10/29 🇱🇰 𝗗𝗥𝗔𝗚𝗢𝗡 𝗫  𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🕊 CONFIRMED 2007|>";
    r_text[6] ="0582 🇱🇰 𝗗𝗥𝗔𝗚𝗢𝗡 𝗫  𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🕊 CONFIRMED  2026|>";
    r_text[7] ="0719 🇱🇰 𝗗𝗥𝗔𝗚𝗢𝗡 𝗫  𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🕊 CONFIRMED  2027|>";
    r_text[8] ="0269 🇱🇰 𝗗𝗥𝗔𝗚𝗢𝗡 𝗫  𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🕊 CONFIRMED  2028|>";
  

    var i = Math.floor(08*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i])+'.', MessageType.text);

    }));

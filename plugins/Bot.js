const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 🛡️ DRAGONX 🛡️ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🍒 *Owner & Founder - Janith sadanuwan*

🍒 *Language - NODE JS*

🧿 My name : 🛡 Dragon x 🛡\n\n\n\n ◐. Github - https://tinyurl.com/ycq7ra4x \n ◐. Youtube - https://tinyurl.com/yalqofqs \n ◐. Owner -https://tinyurl.com/y7evah34  \n ◐. Our Web - https://tinyurl.com/y7ul7kt4 \n\n ◐. All Cammands -Type .menu\n\n\nThank You For Using 🛡 *Dragon x* 🛡


`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 🛡️ DRAGONX 🛡️ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 
🍒 *Owner & Founder - Janith sadanuwan*

🍒 *Language - NODE JS*
        
🧿 My name : 🛡 Dragon x 🛡\n\n\n\n ◐. Github - https://tinyurl.com/ycq7ra4x \n ◐. Youtube - https://tinyurl.com/yalqofqs \n ◐. Owner -https://tinyurl.com/y7evah34  \n ◐. Our Web - https://tinyurl.com/y7ul7kt4 \n\n ◐. All Cammands -Type .menu\n\n\nThank You For Using 🛡 *Dragon x* 🛡
        
 `})
        


    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 🛡️ DRAGONX 🛡️ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🍒    *Owner & Founder - Janith sadanuwan*

🍒    *Language - NODE JS*

🧿 My name : 🛡 Dragon x 🛡\n\n\n\n ◐. Github - https://tinyurl.com/ycq7ra4x \n ◐. Youtube - https://tinyurl.com/yalqofqs \n ◐. Owner -https://tinyurl.com/y7evah34  \n ◐. Our Web - https://tinyurl.com/y7ul7kt4 \n\n ◐. All Cammands -Type .menu\n\n\nThank You For Using 🛡 *Dragon x* 🛡

 `  ,quoted: message.data})

    }));
}
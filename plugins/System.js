

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {
    var menu = ''
if (Config.LANG == 'SI') SYSDTXT = '💻 පද්ධති තත්ත්වය'
if (Config.LANG == 'EN') SYSDTXT = '💻 System status'

var version = ''
if (Config.LANG == 'SI') VER = '🧬 Version'
if (Config.LANG == 'EN') VER = '🧬 Version'

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
                {buttonId: BUTTHANDLE + 'version', buttonText: {displayText: version }, type: 1},
                {buttonId: BUTTHANDLE + 'menu', buttonText: {displayText: menu }, type: 1}
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⎝🛡️ Dragon x 🛡️⎠ ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "🇱🇰 Hay All I'm Alive now 🇱🇰\n\n🧿 My name : ⎝🛡️ Dragon x 🛡️⎠\n\n\n ◐. Developer:Janith Sadanuwan \n ◐. Github - https://tinyurl.com/ycq7ra4x \n ◐. Youtube - https://tinyurl.com/yalqofqs \n ◐. Owner -https://tinyurl.com/y7evah34  \n ◐. Our Web - https://tinyurl.com/y7ul7kt4 \n\n ◐. All Cammands -Type .menu\n\n\nThank You For Using ⎝🛡️ *Dragon x* 🛡️⎠"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
            {buttonId: BUTTHANDLE + 'version', buttonText: {displayText: version }, type: 1},
            {buttonId: BUTTHANDLE + 'menu', buttonText: {displayText: menu }, type: 1}
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⎝🛡️ Dragon x 🛡️⎠ ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*⎝🛡️ Dragon x 🛡️⎠*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⎝🛡️ Dragon x 🛡️⎠*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 Public'+
                `\n\n🍁 Check github for bot: https://github.com/Janithsadanuwan/Dragonx-Whatsapp-Bot`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
                {buttonId: BUTTHANDLE + 'version', buttonText: {displayText: version }, type: 1},
                {buttonId: BUTTHANDLE + 'menu', buttonText: {displayText: menu }, type: 1}
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⎝🛡️ Dragon x 🛡️⎠ ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "🇱🇰 Hay All I'm Alive now 🇱🇰\n\n🧿 My name : ⎝🛡️ Dragon x 🛡️⎠\n\n\n ◐. Developer:Janith Sadanuwan \n ◐. Github - https://tinyurl.com/ycq7ra4x \n ◐. Youtube - https://tinyurl.com/yalqofqs \n ◐. Owner -https://tinyurl.com/y7evah34  \n ◐. Our Web - https://tinyurl.com/y7ul7kt4 \n\n ◐. All Cammands -Type .menu\n\n\nThank You For Using ⎝🛡️ *Dragon x* 🛡️⎠"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'menu', buttonText: {displayText: 'Menu'}, type: 1},//jakakkak
  {buttonId: 'version', buttonText: {displayText: 'Version'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⎝🛡️ Dragon x 🛡️⎠ ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*⎝🛡️ Dragon x 🛡️⎠*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⎝🛡️ Dragon x 🛡️⎠*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 - Public'+
                `\n\n🍁 Check github for bot:  https://github.com/Janithsadanuwan/Dragonx-Whatsapp-Bot`
           , MessageType.text);
            
        }));
}
const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'softstore', fromMe: false,  deleteCommand: true }, (async (message, match) => {

            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🇱🇰 🕊 SOFTWARE STORE BY ᴊᴀɴɪᴛʜ ꜱᴀᴅᴀɴᴜᴡᴀɴ 🇱🇰 🇱🇰 🕊
│
│  ◎Adobe Editing Softwares type =.adobe
│  ◎Wondershare Softwares type =.ws
│  ◎Operating System type =.os 
│  ◎Antivirus Softwares type =.vs
│  ◎Office Softwares type =.office   
│  ◎Android Emulator Form Pc =.em
│
│         🇱🇰 🕊POWERD BY🇱🇰 🕊
│        🇱🇰 🕊  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🇱🇰 🕊
╰──────────────`,quoted: message.data})

    }));


    Trex.addrex({pattern: 'adobe', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🇱🇰 🕊 SOFTWARE STORE BY ᴊᴀɴɪᴛʜ ꜱᴀᴅᴀɴᴜᴡᴀɴ 🇱🇰 🇱🇰 🕊
│    adobe editing softwares
│    
│  ◎Adobe Photoshop =.aps
│  ◎Adobe Primere pro =.apr
│  ◎Adobe After effect =.aaf
│  ◎Adobe Ligthroom =.alm
│   
│
│         🇱🇰 🕊POWERD BY🇱🇰 🕊
│        🇱🇰 🕊  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🇱🇰 🕊
╰──────────────`,quoted: message.data})



    }));

  Trex.addrex({pattern: 'os', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🇱🇰 🕊 SOFTWARE STORE BY ᴊᴀɴɪᴛʜ ꜱᴀᴅᴀɴᴜᴡᴀɴ 🇱🇰 🇱🇰 🕊
│         Operating System
│
│  ◎Windwos 7 =.win7
│  ◎Windwos 8.1 =.win8
│  ◎Windwos 10 pro =.win10
│  ◎Windwso 11 pro =.win11
│
│         🇱🇰 🕊POWERD BY🇱🇰 🕊
│        🇱🇰 🕊  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🇱🇰 🕊
╰──────────────`,quoted: message.data})

  }));

  Trex.addrex({pattern: 'em', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🇱🇰 🕊 SOFTWARE STORE BY ᴊᴀɴɪᴛʜ ꜱᴀᴅᴀɴᴜᴡᴀɴ 🇱🇰 🇱🇰 🕊
│       Android Emulator From Pc
│  
│   ◎Blustaucks 5 =.bl
│   ◎Nox player =.nx
│   ◎Memu player =.mm
│   
│         🇱🇰 🕊POWERD BY🇱🇰 🕊
│         🇱🇰 🕊  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🇱🇰 🕊
╰──────────────`,quoted: message.data})

    }));

    Trex.addrex({pattern: 'vs', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🇱🇰 🕊 SOFTWARE STORE BY ᴊᴀɴɪᴛʜ ꜱᴀᴅᴀɴᴜᴡᴀɴ 🇱🇰 🇱🇰 🕊
│        Antivirus Softwares
│  ◎Avira Antivirus Pro 15.0.29 =.aa
│  ◎IObit Advanced SystemCare Pro 12.4.0 =.as1
│  ◎Avast Internet Security 2019 =.is1
│  ◎Avast Premium Security 20.10.5824 =.is2 
│  ◎Advanced SystemCare Ultimate 13.5.0.173 =.as2
│
│         🇱🇰 🕊POWERD BY🇱🇰 🕊
│         🇱🇰 🕊  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🇱🇰 🕊
╰──────────────`,quoted: message.data})

    }));

}

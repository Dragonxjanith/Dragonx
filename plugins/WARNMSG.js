const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'warn1', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/d3075c23f4b9e35459874.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARN ╗📛\n\n' + Config.WARN1 + '\n\n\n      ⎝🛡️  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🛡️⎠    '})

    }));
  Trex.addrex({pattern: 'warn2', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/d3075c23f4b9e35459874.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARN ╗📛\n\n' + Config.WARN2 + '\n\n\n      ⎝🛡️  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🛡️⎠    '})

    }));
  Trex.addrex({pattern: 'warn3', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/d3075c23f4b9e35459874.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARN ╗📛\n\n' + Config.WARN3 + '\n\n\n      ⎝🛡️  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🛡️⎠    '})

    }));
  Trex.addrex({pattern: 'warn4', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/d3075c23f4b9e35459874.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARN ╗📛\n\n' + Config.WARN4 + '\n\n\n      ⎝🛡️  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🛡️⎠    '})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'warn1', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/d3075c23f4b9e35459874.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARN ╗📛\n\n' + Config.WARN1 + '\n\n\n      ⎝🛡️  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🛡️⎠    '})

    }));
  
  Trex.addrex({pattern: 'warn2', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/d3075c23f4b9e35459874.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARN ╗📛\n\n' + Config.WARN2 + '\n\n\n      ⎝🛡️  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🛡️⎠    ' })

    }));
  Trex.addrex({pattern: 'warn3', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/d3075c23f4b9e35459874.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARN ╗📛\n\n' + Config.WARN3 + '\n\n\n     ⎝🛡️  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🛡️⎠    ' })

    }));
  Trex.addrex({pattern: 'warn4', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/d3075c23f4b9e35459874.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARN ╗📛\n\n' + Config.WARN4 + '\n\n\n      ⎝🛡️  ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ   🛡️⎠    ' })

    }));
}

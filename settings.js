/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94701363708'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['94701363708'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94701363708'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Yeshan basnayake' // Your name ඔබේ නම 
global.botnma = '💃ʀͥᴇᷧᴀʟⷨ٭͢★❮᭄  ᷜʏͥᴇᷠʜᷚᴀɴ⇅࿐💃' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = 'yeshan basnayake' //ownernama,ownername
global.packname = 'ʀͥᴇᷧᴀʟⷨ٭͢★❮᭄  ᷜʏͥᴇᷠʜᷚᴀɴ⇅࿐ Sticker' // Sticker package name 
global.author = 'Dark Maker' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති `ʀͥᴇᷧᴀʟⷨ٭͢★❮᭄  ᷜʏͥᴇᷠʜᷚᴀɴ⇅࿐:|🥺❤️ ᴀʟʟꜱ ᴄᴀɴ ||❤️✌️ http://Wa.me//+94701363708🧸?text=හා̶̷යි̶̶🙈🌸_ස̶̷්ටේ̶̷ට̶̷ස්🪄බ̶̷ල̶̬න̷̶්න̶ 🦋⃪⃮⃖🌼⃪⃮⃖✨⃪⃮⃖◊⟺⃝⃕͜⃞𓄂͍✺⃢◍̸̅̄̊̇:Ⓞ❮✪⃝₂₀ⷮ₂ⷨ2࿌ *⃝⃕ ᴜⷮⓄ|කි̶̷ᴿ̶͚͢ᴵ̶කෝ̶̷⃐̅ඩු̶̷⃨ හු̶̷̊̑ᴿ̶͚͢ᴬ̶ත̶̷̎͟͞ලේ̶̷̅⃞🌼̲̱̥̅̄̊⊷⋅‖̶࿂⃞⃡💔😼නා̶හ̶⃮ට̶ අ̶හ̶න̶්͜͡නැ̶ති̶ එ̶͢කාـ😹✌️ــ Active always Bot Is Alive Now.....😁❤️ 𝓽ꫝꪖꪀ𝘬𝘴 ᦔꪮ𝘳 ꫀꪜꫀ𝘳ꪗꪮꪀꫀ ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://telegra.ph/file/1a2dee71baa975091620d.jpg`
global.alive =`Hello i am alive now Type .menu to get some commands´

Download song type .yt
Thanks fro using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `.welcome ʀͥᴇᷧᴀʟⷨ٭͢★❮᭄  ᷜʏͥᴇᷠʜᷚᴀɴ⇅࿐⏭ 𝙃𝙀𝙇𝙇𝙊 𝘿𝙀𝘼𝙍 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋________________________What is your name? ☺️❤️´
🌀 Thanks Fro using sl zim bot
✾ Some bugs fixing
😼♥️
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 ʀͥᴇᷧᴀʟⷨ٭͢★❮᭄  ᷜʏͥᴇᷠʜᷚᴀɴ⇅࿐`
global.mess = `Hello i'm alive now´
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin first!',
    owner: 'This cmd is for ʀͥᴇᷧᴀʟⷨ٭͢★❮᭄  ᷜʏͥᴇᷠʜᷚᴀɴ⇅࿐bot only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

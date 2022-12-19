/**
   * Create By THE JO BOT
   * Base by Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01',
}


global.ownername = '𝑺𝑶𝑼𝑳 𝑫𝑶𝑴𝑰𝑵𝑨𝑻𝑶𝑹'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = true //status online (online)
// Other
global.owner = ['919749904467']
global.premium = ['919749904467']
global.packname = '𝑰𝑻𝒁 𝑴𝑬 𝑺𝑶𝑼𝑳 𝑫𝑶𝑴𝑰𝑵𝑨𝑻𝑶𝑹'
global.author = '𝑺𝑶𝑼𝑳 𝑫𝑶𝑴𝑰𝑵𝑨𝑻𝑶𝑹'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['',',','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
   success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

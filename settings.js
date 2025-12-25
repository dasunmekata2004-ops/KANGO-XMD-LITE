//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUxwNTl2R3lOVGM2bFVaNTZWS3R1ejFlM3oxMHNTWDF0dHhvVnFabEZuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYi9UQ29NQXowZjMyUlpiNStaVU9ESjNYdFhZNnJpeVdPUVpPS25zNjhYST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSkQ5VmZSQTVnb0pjY0YxZkhUZE9weW03RGJhVzVjV1pUU1l0WjRwL1ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZWk2ZjloTjhLZTV5eGlkS3BLbllZbUI4dndPWTBuK3VUOERFZm1MNTBFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhLRVFDTGlvZmxEUFp4TGQySy91VTlpY3cvVTJ3eTUrS1IzbGZuUDB6a1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxKeUxpY2lrb3FCZFVFT29rYzV3R0FhNTZrSlpRd3NCZjBqRmtGWkRKMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5FN3JHYVBGU3FxWHJqNEFCSFd0dk83aU9tOVcvRWNncU5XbXBOdjJucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1lpWXN5dU9RdHJ5bnlwd0QweGhhTzNPR2lKaDFOdWVGakhtWlV0UGMxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkrQ0RkaCs0eThBRE1waVJxd1FQZ29DT2lSMXB3d1RmbmpWUlYxUWpTRHdOaGFqZWV2SEZ4dFp4VUNZaEh6M1VYRkROcldON3pVc2tEMTAxdGt2QUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6IlArbzFybjVnYnU1ZWNGQnFnVmhwRWEreXFsL3ZrVlhLVVlmTm1ESDJiL0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiV0EzUTY2NVIiLCJtZSI6eyJpZCI6Ijk0NzgxNTg2NDA2OjMyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTIyOTkxMjcwNzM2MDM1OjMyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXIxdXVnQ0VJaThzc29HR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYllHVVNROW15aHJLOVlhNUNCTEREamVyZFdwVEVBV3N2cmxlUTlkQjNIMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSWpnQnBKaTV2a1B6Slp4ZDAwZEhLbU9xMFVtOW9PN1gwYmh3V3JaZXFLay9Pd3VLanF5UVFIcDg1VW5BVHRNSnd0ZWFlYkxzK2RWSU1KUXZscEdWQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IklZOVRMK2pROFlpMmRpcTAyRjVqSVgxb0VQN1V2YkU4b3FYUHBaVThNd2RhSk1MY0Z6SVZTVU4yUG8yek9KQXp6d1ZyS2VmVFIvaEl0SkNrUWxGakRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTIyOTkxMjcwNzM2MDM1OjMyQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXMkJsRWtQWnNvYXl2V0d1UWdTd3c0M3EzVnFVeEFGckw2NVhrUFhRZHg5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWdnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjY2Mjg4ODYsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmVqIn0=' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '94781586406' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//

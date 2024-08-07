const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://King-MdIsbot:King-MdIsbot@cluster0.hikjrg2.mongodb.net/?retryWrites=true&w=majority
  "
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923266556989";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_17_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgOTksXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMixcbiAgICAgICAgODcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOajgxZTRiSFJOZ05PUU5EcFI5QnlMSFlmWk40RWYxZ2tCc0V0SWk3bVFBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI2NjU1Njk4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjlBQzdBQzUxOEY3RjE5QTY1RjdFMTNCNzM5QzVDQjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMDExNDIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjY2NTU2OTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGOTkwNDA0RUYzOEZCQUIzQzg3NjJEMkQ1RjVCQjcxQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwMTE0MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibDlqUzlfVVJTZnFuZ2JSRnJlelhDd1wiLFxuICBcInBob25lSWRcIjogXCI2NjFiMjgyOS02YjliLTQ3NmMtYmEwYi1lNWRjNGZjNjhkZmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTQ5LFxuICAgICAgMTQsXG4gICAgICAxMTQsXG4gICAgICA1MCxcbiAgICAgIDExMSxcbiAgICAgIDY2LFxuICAgICAgMTc5LFxuICAgICAgNjksXG4gICAgICAyMTcsXG4gICAgICAxNjksXG4gICAgICAyLFxuICAgICAgNzAsXG4gICAgICAxODQsXG4gICAgICAyMTEsXG4gICAgICAyNCxcbiAgICAgIDI0NyxcbiAgICAgIDg4LFxuICAgICAgMjMxLFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDIxNSxcbiAgICAgIDIzMixcbiAgICAgIDE3MixcbiAgICAgIDIzNCxcbiAgICAgIDEyMixcbiAgICAgIDE2MyxcbiAgICAgIDE4OSxcbiAgICAgIDE4NyxcbiAgICAgIDQ4LFxuICAgICAgMTA2LFxuICAgICAgNSxcbiAgICAgIDE0MCxcbiAgICAgIDE2NCxcbiAgICAgIDMwLFxuICAgICAgMjQ2LFxuICAgICAgNzAsXG4gICAgICA3MSxcbiAgICAgIDksXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzVBRlNHRlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI2NjU1Njk4OToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEyMjU4MDQ2Nzc5NDY0OjE3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIm11emFtbWlscmlkNjc2NVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ERGk2b0JFTmVpekxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMXNXb0pwQ1pFaXBacjYrejJtclJDWUpmYW55TEpNVlh3ZW1XZk5CTkdWZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDWE92andrdWF4QkxQR2I0UXNXZVduYVhJekhrcXhqdnJzTzRwY01tb0V4RDhqVkJBV2xTSVBZV2VnNGE0KzhtUnJQSkROSmJBOTNIemtvaytMU2tCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1VHFXc05yeTdyN3h3SzNIVTlyQjRlQUM5dW9pYkxpam9xWi93a2VCWkM4UzcxMkc2RzFmcmlSTjJQZDdmVDFKYkNpNVJXNzk1SnlzTE1ualBCTWNEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNjY1NTY5ODk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMTE0MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQME1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwTS5qc29uIjogIntcImtleURhdGFcIjpcIkV4cko4Q1kvWEMvcVBhQkhYNUNkVEhUN0V3OWhPY2x1TnFHWkR6ZnlBQzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU2NzA0NzIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwMTE0MjEyNTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

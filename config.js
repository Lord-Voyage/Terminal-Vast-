/* m
  -! Credits By Kevintech 
  Thanks to great lonelysaam 
  Thanks to Malvin King 
  https://wa.me/256742932677
*/

// setting/config.js
const fs = require('fs');

// --- Setting Owner ---?  
 //  
global.owner = ["256702359159"];  
global.sudo = ["256702359159", "256755585369"];// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.
global.ownername = "Lord Voyage";  
global.botname = "Terminal Vast";  

// ========= Setting Channel ========= //
global.namachannel = "Voyage Collections";
global.idchannel = "120363424070530590@newsletter";
global.linkchannel = "";

// ========= Setting Status ========= //
global.antispam = true;
global.autoread = false;
global.autoreact = false;
global.antibug = true;
global.autobio = false;
global.autoTyping = false;
global.autorecording = false;
global.prefixz = '.';

// ========= Anti-Delete Feature ========= //
global.antidelete = 'private'; // Options: 'private', 'chat', or 'off'

// ===== Anticall ===========
global.anticall = 'off';// options :- 'off', 'decline' or 'block'
// off - Disables anticall
// decline - Declines incoming calls
// Block - Declines and blocks callers

// ======= Anti-Edit ==============
global.antiedit = 'private'; // options: 'private, 'chat', or 'off'

// ====== Global for status ========
global.autoviewstatus = 'true';    // Enable auto-view status
global.autoreactstatus = 'true';   // Enable auto-react to status  
global.statusemoji = '💚';         // Emoji to use for reactions

// ======Antilink globals=======°°
global.antilinkdelete = true;
global.antilinkwarn = true;
global.antilinkkick = false;


// ========= Other Global Settings ========= //
global.SESSION_ID = process.env.SESSION_ID || '';
global.postgresqls = process.env.DATABASE_URL || "";

global.welcome = true;
global.adminevent = true;
global.AI_CHAT = "false"; // Set to "true" to enable AI chatbot by default


// ========= Add modeStatus and versions ========= //
global.modeStatus = "Public";
global.versions = "1.0.0";

// ========= Setting WM ========= //
global.packname = 'TerminalVast';
global.author = 'Bot';
global.wm = '©Vast Aura Reloaded';

// === For only developer ============
global.api = "https://xploaderapi-f5e63b.platform.cypherx.space";
global.wwe = "https://www.wwe.com/api/news";
global.wwe1 = "https://www.thesportsdb.com/api/v1/json/3/searchfilename.php?e=wwe";
global.wwe2 = "https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=wrestling";
global.falcon = "https://flowfalcon.dpdns.org";
global.updateZipUrl = "https://github.com/vinicbot-dev/Devkelvin/archive/refs/heads/main.zip";

global.gcount = {
  prem: 500,
  user: 15
};

global.limitCount = 10;

global.mess = {
  group: "*Activate in only Groups*",
  notadmin: "This command is only preserved for group admins only!",
  owner: "Only Owners can Access This feature",
  done: "*Operation Successful*",
  notext: "*Input the necessary text*",
  premium: "*Become a premium user to Access this feature*",
  botadmin: " Bot requires admins permission!",
  error: "An error has occurred during the process!",
  limited: "*Limit reached*",
  helpersList: [
    { name: "Malvin king", number: "+263776388689", country: "Zimbabwe", flag: "🇿🇼" },
    { name: "lonlysaam", number: "+254762586673", country: "Kenya", flag: "🇹🇿" },
    { name: "Terri", number: "+256752792178", country: "Uganda", flag: "🇺🇬" },
    { name: "Dev sung", number: "+27649342626", country: "South Africa", flag: "🇿🇦" }
  ],
  siputzx: "https://api.siputzx.my.id" 
};


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  delete require.cache[file];
  require(file);
});

 const os = require('os');
const fs = require('fs');
const path = require('path');
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

const { getSetting } = require('../../start/Core/settingManager');
// File to store menu configuration - using temp directory
const menuConfigPath = path.join(__dirname, '../temp/menu_config.json');


// Memory formatting function
const formatMemory = (memory) => {
    return memory < 1024 * 1024 * 1024
        ? Math.round(memory / 1024 / 1024) + ' MB'
        : Math.round(memory / 1024 / 1024 / 1024) + ' GB';
};

// Memory progress bar (System RAM usage)
const progressBar = (used, total, size = 10) => {
    let percentage = Math.round((used / total) * size);
    let bar = '█'.repeat(percentage) + '░'.repeat(size - percentage);
    return `[${bar}] ${Math.round((used / total) * 100)}%`;
};

// Defaults (prevent crash)
const defaultPreset = "preset1";
const defaultMenuStyle = "default";

// ✅ ORDER FIXED HERE (Bot Status + Bot Settings first)
const menuPresets = {
    preset1: [
        'header',
        'cmdTool',   // 🔥 FIRST
        'features',  // 🔥 SECOND
        'ai',
        'audio',
        'convert',
        'download',
        'ephoto',
        'fun',
        'group',
        'helpers',
        'image',
        'other',
        'owner',
        'reaction',
        'religion',
        'search'
    ]
};

// Prevent undefined crashes
function loadMenuConfig() {
    return { preset: defaultPreset, style: defaultMenuStyle };
}
function resetMenu() {}
function showCurrentMenu() {}

// Function to generate the menu
async function generateMenu(conn, m, prefix, global) {
    const botNumber = await conn.decodeJid(conn.user.id);

    const menuConfig = loadMenuConfig();
    const currentPreset = menuConfig.preset || defaultPreset;
    const currentStyle = menuConfig.style || defaultMenuStyle;
    const currentOrder = menuPresets[currentPreset] || menuPresets.preset1;

    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const systemUsedMemory = totalMemory - freeMemory;

    const menuSections = {
        header: {
            title: '𖠌 *𝗩𝗼𝘆𝗮𝗴𝗲 𝗖𝗼𝗹𝗹𝗲𝗰𝘁𝗶𝗼𝗻𝘀* ',
            content: [
                `𖠌 *ᴀɢᴇɴᴛ*: ${getSetting(botNumber, 'ownername', 'Not set')}`,
                `𖠌 *BOTNAME*: ${getSetting(botNumber, 'botname', 'Terminal')}`,
                `𖠌 *MODE*: ${conn.public ? 'public' : 'private'}`,
                `𖠌 *PREFIX*: [ ${prefix} ]`,
                `𖠌 *VERSION*: ${global.versions}`,
                `𖠌 *CHIP*: ${progressBar(systemUsedMemory, totalMemory)}\n`,
                `𖠌 *DEV*: Lord Voyage`,
                ` 𖠌 terminalvast.netlify.app`
            ],
        },
        ai: {
            title: ' *Artificial Intelligence* ',
            commands: ['generate', 'ai', 'copilot', 'metaai', 'deepseek', 'venice',  'flux', 'dalle', 'mistral', 'summarize', 'claude', 'gpt4nano', 'bard', 'perplexity', 'kelvinai',  'blackbox', 'gpt'],
        },
        audio: {
            title: ' *Audio Features* ',
            commands: ['bass', 'treble', 'blown', 'robot', 'reverse', 'instrumental', 
                      'vocalremove', 'karaoke', 'volaudio', 'fast', 'slow'],
        },
        cmdTool: {
            title: ' *Bot Status* ',
            commands: ['ping', 'pair', 'uptime',  'bothosting', 'repo', 'botstatus', 'botinfo', 'sc', 
                      'serverinfo', 'alive'],
        },
        convert: {
            title: ' *Convert features* ',
            commands: ['toaudio', 'toimage', 'url', 'tovideo', 'topdf', 'sticker'],
        },
        download: {
            title: ' *Download Features* ',
            commands: ['play', 'play2', 'song', 'song2', 'music', 'ytplay', 'gitclone', 'ringtone', 
                      'download', 'pinterest', 'mediafire', 'itunes', 'ytmp4', 'ytstalk', 
                      'apk', 'gdrive', 'playdoc', 'tiktok', 'tiktok2', 'instagram', 
                      'video', 'tiktokaudio', 'savestatus', 'facebook'],
        },
        ephoto: {
            title: ' *Logo Creator* ',
            commands: ['blackpinklogo', 'blackpinkstyle', 'glossysilver', 'glitchtext', 
                      'arting', 'advancedglow', 'cartoonstyle', 'deadpool', 'deletingtext', 
                      'luxurygold',  '1917style', 'pixelglitch', 'multicoloredneon', 
                      'effectclouds', 'flagtext', 'freecreate', 'galaxystyle', 'papercut', 'holigram', 'royal', 'bear', 'textonwetglass', 'galaxywallpaper', 
                      'glowingtext', 'makingneon', 'matrix', 'royaltext', 'sand', 'summerbeach', 
                      'topography', 'typography', 'flux', 'dragonball'],
        },
        features: {
            title: ' Bot Settings* ',
            commands: ['antidelete', 'anticall', 'autorecording', 'autotyping', 'alwaysonline',
                      'welcome', 'chatbot', 'autoread', 'adminevent', 'autoviewstatus', 
                      'autoreactstatus', 'antiedit'],
        },
        fun: {
            title: ' *Fun Zone* ',
            commands: ['dare', 'Quotes', 'truth', 'fact', 'truthdetecter', 'valentines', 
                      'advice', 'motivate', 'pickupline', '8balls', 'mee',  'trivia',
                      'lovetest', 'character', 'compatibility', 'compliment', 'jokes'],
        },
        group: {
            title: ' *Group Management* ',
            commands: [
                'hidetag', 'kick', 'resetlink', 'linkgc', 'checkchan', 'antilink', 'antitag', 'antitagadmin', 
                'listonline', 'add',  'listactive', 'listinactive', 'close', 'open', 'kick', 'kickinactive', 
                 'cancelkick', 'kickall', 'closetime', 'disp24hours', 'disp90days', 'dispoff', 'setgrouppp',
                 'opentime', 'poll',  'totalmembers', 
                'mediatag', 'getgrouppp',  'tagall', 'tagall2', 'groupinfo', 'userjid', 'unlockgcsettings', 'lockgcsettings',
                'tagadmin', 'setgroupname', 'delgrouppp', 'invite', 'editinfo', 'approve', 
                'disapproveall', 'listrequest', 'promote', 'demote', 'userjid', 'setdesc', 'vcf'
            ],
        },
        helpers: {
            title: ' *Bot Support* ',
            commands: ['helpers', 'dev'],
        },
        image: {
            title: ' *Image Generator* ',
            commands: ['wallapaper', 'balogo', 'tattoo', 'remini'],
        },
        other: {
            title: ' *Toolkit 24/7* ',
            commands: ['time', 'calculate', 'owner', 'fliptext', 'translate', 
                      'ss2', 'sswebpc', 'kevinfarm', 'say', 'getdevice', 'ss', 'gpass', 'userinfo', 
                      'npm', 'take', 'emoji', 'telesticker', 'checkapi', 'filtervcf', 'qrcode', 'smartphone', 
                      'removebg', 'obfuscate', 'obfuscate2', 'getabout', 'tinylink', 'vcc', 'getbussiness', 
                      'listpc', 'sswebpc'],
        },
        owner: {
            title: ' *Owner Dashboard* ',
            commands: [
                'addowner', 'idch', 'createch', 'creategroup', 'del', 'setpp', 'delpp', 'private', 'public',
                'lastseen', 'setprefix', 'togroupstatus', 'groupid', 'readreceipts', 'reportbug', 'clearchat', 
               'groupjids', 'broadcast', 
                'react', 'restart', 'currentmenu', 'addignorelist', 'delignorelist', 'deljunk', 'cleansession', 'settings', 'update',
                'listblocked', 'listsudo', 'setprofilename', 'listignored', 'online', 'join', 
                'leave', 'setbio', 'resetsettings', 'backup', 'reqeust', 'block',  'toviewonce', 
                'setownername', 'setawesomemenu', 'resetawesomemenu', 'setbotname', 'unblock', 'unblockall', 'gcaddprivacy', 
                'ppprivancy', 'vv', 'vv2', 'idch', 'getpp', 'setmenu1', 'setmenu2', 'setmenu3', 'setmenu4', 'setmenu5', 'setmenu6'
            ],
        },
        reaction: {
            title: ' *Sticker Zone* ',
            commands: ['kiss', 'blush', 'kick', 'slap', 'dance', 'bully', 'kill', 
 'hug', 'happy', 'cry', 'pat', 'poke', 'smile', 'wave', 
 'cuddle', 'highfive', 'lick', 'bite', 'glomp', 'bonk', 
 'yeet', 'smug', 'nom', 'sleepy', 'facepalm', 'wink', 
 'shy', 'stare', 'thinking', 'shoot', 'run', 'shrug', 
 'panic', 'tease', 'shiver', 'bored', 'scream', 'pout', 
 'handhold', 'spank', 'tickle', 'cringe', 'party', 'celebrate'],
        },
        religion: {
            title: ' *Holy Books* ',
            commands: ['Bible', 'Biblelist', 'Quran'],
        },
        search: {
            title: ' *Browse Features* ',
            commands: ['lyrics', 'chord', 'weather', 'movie', 'define', 'gitstalk', 'playstore',
                      'tiktoksearch', 'ytsearch', 'shazam'],
        },
  
    };

    const formatDefaultMenu = () => {
        let menu = `*┏━━━✰ Voyage Collections✰━━━┓*\n`;
        menu += menuSections.header.content.map(line => `┃ ${line}`).join('\n') + '\n';
        menu += `*┗━━━━━━━━━━━━━━━━┛*\n\n`;

        let sectionCount = 0;
        for (const sectionKey of currentOrder) {
            if (sectionKey !== 'header' && menuSections[sectionKey]) {
                const section = menuSections[sectionKey];
                menu += `┏❒${section.title.toUpperCase()} ❒\n`;
                menu += section.commands.map(cmd => `┃✰ ${cmd}`).join('\n') + '\n';
                menu += `┗❒\n\n`;

                sectionCount++;
                if (sectionCount === 3) { 
                    menu += `${readmore}\n\n`;
                }
                if (sectionCount === 8) {  
                    menu += `${readmore}\n\n`;
                }
            }
        }

        menu += ` ©Copyright Voyage Software Inc™`;
        return menu;
    };

    return {
        formatMenu: formatDefaultMenu
    };
}


// Function to send the menu
async function sendMenu(conn, m, prefix, global) {
    try {
        const { formatMenu } = await generateMenu(conn, m, prefix, global);

        const imageUrls = [
            'https://files.catbox.moe/dyc75h.jpg',
            'https://files.catbox.moe/dyc75h.jpg',
            'https://files.catbox.moe/dyc75h.jpg',
            'https://files.catbox.moe/jvx0ya.jpg'
        ];

        const audioUrls = [
            'https://files.catbox.moe/yf6pu3.mp3'
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        const randomAudio = audioUrls[Math.floor(Math.random() * audioUrls.length)];

        await conn.sendMessage(m.chat, {
            image: { url: randomImage },
            caption: formatMenu(),
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: '❖ ᴊᴏɪɴ Voyage Collections❖',
                    newsletterJid: '120363425476255595@newsletter',
                },
                isForwarded: true,
                showAdAttribution: true,
                title: global.botname || 'Terminal Vast',
                body: '✬Voyage Collections✬',
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnail: global.cina || 'https://files.catbox.moe/jvx0ya.jpg', 
                sourceUrl: 'https://whatsapp.com/channel/0029VbCYW1aKbYMDuH00Gq0d',
            },
        }, { quoted: m });

        await conn.sendMessage(m.chat, {
            audio: { url: randomAudio },
            mimetype: 'audio/mpeg',
            ptt: false,
        });

        return true;
    } catch (error) {
        console.error('Error sending menu:', error);
        throw error;
    }
}

// Safe helpers
function getMenuSection() { return null; }
function getCommandList() { return []; }

module.exports = {
    generateMenu,
    sendMenu,
    progressBar,
    getMenuSection,
    getCommandList,
    resetMenu,
    showCurrentMenu,
    loadMenuConfig,
};
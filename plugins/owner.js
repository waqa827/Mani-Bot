const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "Mani Mode",
    react: "✅", 
    desc: "923033096103",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.923033096103; // Fetch owner number from config
        const ownerName = config.Mani mode;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: Mani Mode,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/vuyx2g.jpg' }, // Image URL from your request
            caption: `╭━━〔 *𝙈𝙖𝙣𝙞_𝙈𝙙* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Here is the owner details*
┃◈┃• *Name* - ${Mani Mode}
┃◈┃• *Number* ${923033096103}
┃◈┃• *Version*: 2.0.0 Beta
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙈𝙖𝙣𝙞_𝙈𝙙 ❣️*`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363348739987203@newsletter',
                    newsletterName: '*𝙈𝙖𝙣𝙞_𝙈𝙙*',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/4fz6jh.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');

module.exports = {
    makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    ...require('@whiskeysockets/baileys')
};

console.log('✅ Baileys-Heri loaded | HeriKeyzenlocker - Banjaran Sudom');

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('./src/index');

const NOMOR = '6281278455854';

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('session');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        browser: ['HeriKeyzenlocker', 'Chrome', '1.0.0']
    });

    sock.ev.on('connection.update', async ({ connection, lastDisconnect }) => {
        if (connection === 'open') {
            console.log('✅ BOT AKTIF! | HeriKeyzenlocker - Banjaran Sudom');
        }
        if (connection === 'close' && lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
            setTimeout(startBot, 5000);
        }
    });

    sock.ev.on('creds.update', saveCreds);

    setTimeout(async () => {
        try {
            const code = await sock.requestPairingCode(NOMOR);
            console.log(`\n🔐 KODE PAIRING: ${code}\n`);
        } catch (err) {
            console.log('❌ Error:', err.message);
        }
    }, 3000);
}

startBot();

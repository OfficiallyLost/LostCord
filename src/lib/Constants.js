module.exports.API_VERSION = '9';
module.exports.WEBSOCKET = `wss://gateway.discord.gg/?v=${this.API_VERSION}&encoding=json`;
module.exports.CDN_BASE_URL = 'https://cdn.discordapp.com';
module.exports.BASE_URL = `https://discord.com/api/v${this.API_VERSION}`;
module.exports.DISCORD = {
	INVITE: 'https://discord.gg/FWTRPS9'
};

module.exports.OPCODES = {
	HELLO: 10
};

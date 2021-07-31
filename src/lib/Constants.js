module.exports.API_VERSION = '9';
module.exports.WEBSOCKET = `wss://gateway.discord.gg/?v=${this.API_VERSION}&encoding=json`;
module.exports.CDN_BASE_URL = 'https://cdn.discordapp.com';
module.exports.BASE_URL = `https://discord.com/api/v${this.API_VERSION}`;
module.exports.DISCORD_URL = `https://discord.com/`;
module.exports.DISCORD = {
	INVITE: 'https://discord.gg/FWTRPS9'
};

module.exports.OPCODES = {
	DISPATCH: 0,
	HEARTBEAT: 1,
	IDENTIFY: 2,
	HELLO: 10
};

module.exports.CHANNEL = {
	ZERO: 'Guild Text',
	ONE: 'DM',
	TWO: 'Guild Voice',
	THREE: 'Group DM',
	FOUR: 'Guild Category',
	FIVE: 'Guild News',
	SIX: 'Guild Store',
	THIRTEEN: 'Guild Stage'
};

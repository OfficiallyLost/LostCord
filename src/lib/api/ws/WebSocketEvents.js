const HandleDiscordEvents = require('../../discord/DiscordEvents');
const HandleWSConnection = require('./HandleConnection');

module.exports.open = function(ws) {
	ws.on('open', () => {});
};

module.exports.message = function(data) {
	data.ws.on('message', async (message) => {
		const payload = JSON.parse(message);

		await HandleWSConnection(data, payload);
		await HandleDiscordEvents(data, payload);
	});
};

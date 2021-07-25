const HandleDiscordEvents = require('../../discord/DiscordEvents');
const HandleWSConnection = require('./HandleConnection');

module.exports.open = function(ws) {
	ws.on('open', () => {});
};

module.exports.message = function(ws, data, identify) {
	ws.on('message', (message) => {
		const payload = JSON.parse(message);

		HandleWSConnection(data, payload, identify);
		HandleDiscordEvents(data, payload);
	});
};

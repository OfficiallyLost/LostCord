const Message = require('../structures/Message');
const User = require('../structures/User');

async function handleEvents(data, payload) {
	switch (payload.t) {
		case 'HELLO':
			data.client.emit('hello', payload.d);
			break;

		case 'READY':
			data.client.user = new User(payload.d.user, data.client);
			data.client.guilds = payload.d.guilds.map((guild) => guild.id);
			data.client.channels = [];
			data.client.users = [];

			data.client.log('[WS] READY');
			data.client.emit('ready');
			break;

		case 'RECONNECT':
			if (data.client.options.reconnectAttempts !== 0) {
				setInterval(() => {
					data.ws.connect();
				}, data.client.options.reconnectAttempts);
			}

		case 'MESSAGE_CREATE':
			data.client.emit('messageCreate', new Message(payload.d, data.client));
			break;

		case 'GUILD_CREATE':
			payload.d.channels.map((channel) => data.client.channels.push(channel.id));

			data.client.emit('guildCreate', payload.d);
			break;
	}
}

module.exports = handleEvents;

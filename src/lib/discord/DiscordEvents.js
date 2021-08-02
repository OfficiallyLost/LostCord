const Message = require('../structures/Message');
const User = require('../structures/User');
const constants = require('../Constants');

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
			data.client.application = payload.d.application;

			data.client.log('[WS] READY');
			data.client.emit('ready');
			data.client.status = 'ready';

			break;

		case 'RECONNECT':
			data.ws.send({ op: constants.OPCODES.RECONNECT, d: null });
			data.client.emit('reconnect', 'Discord made us reconnect to their servers');
			break;

		case 'INVALID_SESSION':
			data.client.ws.disconnect();
			data.client.ws.connect();

			data.client.emit('invalidSession', payload.d);
			break;

		case 'APPLICATION_COMMAND_CREATE':
			console.log(paylaod.d);
			data.client.emit('slashCommandCreated', payload.d);

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

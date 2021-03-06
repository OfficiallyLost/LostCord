const Message = require('../structures/Message');
const User = require('../structures/User');
const Interaction = require('../structures/Interaction');

async function handleEvents(data, payload) {
	switch (payload.t) {
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

		case 'APPLICATION_COMMAND_CREATE':
			data.client.emit('applicationCommandCreate', payload.d);
			break;

		case 'INTERACTION_CREATE':
			data.client.emit('interactionCreate', new Interaction(payload.d, data.client));
			break;

		case 'MESSAGE_CREATE':
			data.client.emit('messageCreate', new Message(payload.d, data.client));
			break;

		case 'MESSAGE_UPDATE':
			const channel = await data.client.request.getChannel(payload.d.channel_id);
			let oldMessage = null;
			console.log(channel);
			data.client.emit('messageUpdate', payload.d);
			break;

		case 'GUILD_CREATE':
			payload.d.channels.map((channel) => data.client.channels.push(channel.id));

			data.client.emit('guildCreate', payload.d);
			break;
	}
}

module.exports = handleEvents;

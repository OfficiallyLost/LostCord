const Message = require('../structures/Message');
const User = require('../structures/User');

async function handleEvents(data, payload) {
	switch (payload.t) {
		case 'MESSAGE_CREATE':
			data.client.emit('messageCreate', new Message(payload.d, data.client));
			break;

		case 'READY':
			data.client.user = new User(payload.d.user, data.client);
			data.client.guilds = payload.d.guilds.map((guild) => guild.id);
			data.client.channels = [];
			// let guildChannels = [];

			// for (const guild of data.client.guilds) {
			// 	guildChannels.push(await data.client.request.getGuildChannels(guild));
			// }

			// for (const channel of guildChannels[0].data) {
			// 	data.client.channels.push(channel.id);
			// }

			data.client.log('[WS] READY');
			data.client.emit('ready');

		case 'GUILD_CREATE':
			payload.d.channels.map((channel) => data.client.channels.push(channel.id));
		// for (const channel of payload.d.channels) {
		// 	console.log(payload.d.channels);
		// 	data.client.channels.push(channel.id);
		// }
	}
}

module.exports = handleEvents;

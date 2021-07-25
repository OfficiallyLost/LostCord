const Message = require('../structures/Message');
const User = require('../structures/User');

function handleEvents(data, payload) {
	switch (payload.t) {
		case 'MESSAGE_CREATE':
			data.client.emit('messageCreate', new Message(payload.d, data.client));
			break;

		case 'READY':
			data.client.user = new User(payload.d.user, data.client);

			data.client.log('[WS] READY');
			data.client.emit('ready');
	}
}

module.exports = handleEvents;

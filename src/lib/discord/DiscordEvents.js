const Message = require('../structures/Message');

function handleEvents(data, payload) {
	switch (payload.t) {
		case 'MESSAGE_CREATE':
			data.client.emit('messageCreate', new Message(payload.d, data.client));
			break;

		case 'READY':
			data.client.log('[WS] READY');
			data.client.emit('ready');
	}
}

module.exports = handleEvents;

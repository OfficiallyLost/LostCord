const constants = require('../../Constants');

async function HandleWSConnection(data, payload) {
	switch (payload.op) {
		case constants.OPCODES.DISPATCH:
			if (this.client.options.disabledEvents[packet.t]) {
			}

			break;
		case constants.OPCODES.HELLO:
			data.heartbeatInterval = payload.d.heartbeat_interval;
			data.identify();
			data.heartbeat();

			data.client.emit('hello', payload.d);
			break;

		case constants.OPCODES.HEARTBEAT:
			data.heartbeat();
			break;

		case constants.OPCODES.RECONNECT:
			data.client.emit('reconnect', 'Discord made us reconnect to their servers');
			data.client.ws.restart();
			break;

		case constants.OPCODES.INVALID_SESSION:
			data.client.emit('invalidSession', 'Invalid session, reidentifying...');
			data.identify();
			break;
	}
}

module.exports = HandleWSConnection;

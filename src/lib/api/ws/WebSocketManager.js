const ws = require('ws');
const Message = require('../../structures/Message');
const constants = require('../../Constants');

class WebSocketManager {
	constructor(client) {
		this.ws = new ws(constants.WEBSOCKET);
		Object.defineProperty(this, 'client', { value: client });
		this.heartbeatInterval = 0;
	}

	async connect() {
		const identify = {
			op: constants.OPCODES.IDENTIFY,
			d: {
				intents: this.client.options.intents || 513,
				token: this.client.token,
				properties: {
					$os: process.platform,
					$browser: 'lostcord',
					$device: 'lostcord'
				}
			}
		};

		this.ws.on('open', () => {
			console.log('sent payload');
		});

		this.ws.on('message', (message) => {
			const payload = JSON.parse(message);
			switch (payload.op) {
				case constants.OPCODES.HELLO:
					this.heartbeatInterval = payload.d.heartbeat_interval;
					this.send(identify);

					setInterval(() => {
						this.send({ op: 1, d: null });
					}, this.heartbeatInterval);
			}

			switch (payload.t) {
				case 'MESSAGE_CREATE':
					this.client.emit('messageCreate', new Message(payload.d, this.client));
					break;

				case 'READY':
					this.client.log('[WS] READY');
					this.client.emit('ready');
			}
		});
	}

	send(data) {
		this.ws.send(JSON.stringify(data));
	}
}

module.exports = WebSocketManager;

const ws = require('ws');
const constants = require('../../Constants');

class WebSocketManager {
	constructor(client) {
		this.ws = new ws(constants.WEBSOCKET);
		Object.defineProperty(this, 'client', { value: client });
		this.heartbeatInterval = 0;
	}

	async connect() {
		console.log(this.client);
		let payload = {
			op: 2,
			d: {
				token: this.client.token,
				properties: {
					$os: 'linux',
					intents: this.client.options.intents || 513,
					$browser: 'lostcord',
					$device: 'lostcord'
				}
			}
		};

		console.log(payload);

		this.ws.on('open', () => {
			console.log('sent payload');
		});

		this.ws.on('message', (message) => {
			const payload = JSON.parse(message);
			switch (payload.op) {
				case constants.OPCODES.HELLO:
					this.heartbeatInterval = payload.d.heartbeat_interval;

					setInterval(() => {
						this.heartbeat(this.heartbeatInterval);
						console.log('sent heartbeat and op 1');
					}, this.heartbeatInterval);
			}

			switch (payload.t) {
				case 'MESSAGE_CREATE':
					console.log('message create');
					break;
				case 'READY':
					console.log('ready');
			}
		});
	}

	send(data) {
		this.ws.send(JSON.stringify(data));
	}

	heartbeat(ms) {
		return setInterval(() => {
			this.send({ op: 1, d: null });
		}, ms);
	}
}

module.exports = WebSocketManager;

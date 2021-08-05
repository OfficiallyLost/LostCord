const ws = require('ws');
const constants = require('../../Constants');
const wsEvents = require('./WebSocketEvents');

class WebSocketManager {
	constructor(client) {
		this.ws = null;
		Object.defineProperty(this, 'client', { value: client });
		this.heartbeatInterval = 0;
	}

	async connect() {
		this.initialise();

		wsEvents.open(this.ws);
		wsEvents.message(this);
	}

	send(data) {
		this.ws.send(JSON.stringify(data));
	}

	disconnect() {
		if (this.ws === null) {
			return;
		}

		if (error) {
			this.client.emit('error', error);
		}

		this.ws.close();
		process.exit(1);
	}

	initialise() {
		this.client.status = 'connecting';

		if (!this.client.token) {
			this.disconnect(new Error('You must provide a valid token'));
		}

		this.ws = new ws(constants.WEBSOCKET);
	}

	heartbeat() {
		setInterval(() => {
			this.send({ op: constants.OPCODES.HEARTBEAT, d: null });
		}, this.heartbeatInterval);
	}

	identify() {
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

		this.send(identify);
	}
}

module.exports = WebSocketManager;

const ws = require('ws');
const constants = require('../../Constants');
const wsEvents = require('./WebSocketEvents');
const HandleDiscordEvents = require('../../discord/DiscordEvents');
const HandleWSConnection = require('./HandleConnection');

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

		wsEvents.open(this.ws);

		this.ws.on('message', async (message) => {
			const payload = JSON.parse(message);

			HandleWSConnection(this, payload, identify);
			await HandleDiscordEvents(this, payload);
		});
	}

	send(data) {
		this.ws.send(JSON.stringify(data));
	}
}

module.exports = WebSocketManager;

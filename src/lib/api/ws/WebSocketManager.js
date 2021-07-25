const ws = require('ws');
const Message = require('../../structures/Message');
const constants = require('../../Constants');
const wsEvents = require('./WebSocketEvents');
const DiscordEventHandler = require('../../discord/DiscordEvents');

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
		wsEvents.message(this.ws, this, identify);
	}

	send(data) {
		this.ws.send(JSON.stringify(data));
	}
}

module.exports = WebSocketManager;

const WebSocketManager = require('./WebSocketManager');
const constants = require('../../Constants');
class WebSocket {
	constructor(client) {
		this.WebSocketManager = new WebSocketManager(client);
		Object.defineProperty(this, 'client', { value: client });
	}

	connect() {
		this.WebSocketManager.connect();
	}

	disconnect(error) {
		return this.WebSocketManager.disconnect(error);
	}

	reset() {
		this.client.reconnectAttempts = 0;
		this.client.status = 'disconnected';
	}

	async restart() {
		this.WebSocketManager.ws = null;
		this.WebSocketManager.initialise();
	}
}

module.exports = WebSocket;

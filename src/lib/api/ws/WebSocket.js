const WebSocketManager = require('./WebSocketManager');

class WebSocket {
	constructor(client) {
		this.WebSocketManager = new WebSocketManager(client);
		Object.defineProperty(this, 'client', { value: client });
	}

	connect() {
		this.WebSocketManager.connect();
	}

	disconnect() {
		this.WebSocketManager.disconnect();
	}

	reset() {
		this.client.reconnectAttempts = 0;
		this.client.status = 'disconnected';
	}
}

module.exports = WebSocket;

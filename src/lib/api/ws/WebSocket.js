const WebSocketManager = require('./WebSocketManager');

class WebSocket {
	constructor(client) {
		this.WebSocketManager = new WebSocketManager(client);
	}

	connect() {
		this.WebSocketManager.connect();
	}

	on() {
		return this.client.on('READY');
	}
}

module.exports = WebSocket;

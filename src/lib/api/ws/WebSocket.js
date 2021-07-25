const WebSocketManager = require('./WebSocketManager');

class WebSocket {
	constructor(client) {
		this.WebSocketManager = new WebSocketManager(client);
	}

	connect() {
		this.WebSocketManager.connect();
	}
}

module.exports = WebSocket;

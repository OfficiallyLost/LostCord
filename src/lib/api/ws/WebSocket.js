const WebSocketManager = require('./WebSocketManager');

class WebSocket {
	constructor(client) {
		this.WebSocketManager = new WebSocketManager(client);
	}

	connect() {
		this.WebSocketManager.connect();
	}

	on() {
		console.log(this.client);
		return this.client.on('READY');
	}
}

module.exports = WebSocket;

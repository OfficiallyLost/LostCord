const WebSocketManager = require('./WebSocketManager');

class WebSocket {
	constructor(client) {
		this.WebSocketManager = new WebSocketManager(client);
	}
}

module.exports = WebSocket;

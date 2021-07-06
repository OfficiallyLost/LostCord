const ws = require('ws');
const constants = require('../../Constants');

class WebSocketManager {
	constructor(client) {
		this.ws = new ws(constants.WEBSOCKET);
		this.client = client;
	}

	async connect() {
		this.ws.on('message', (message) => {
			const data = JSON.parse(message);

			switch (data.op) {
				case constants.OPCODES.HELLO:
					const heartbeatInterval = data.d;

					setInterval(() => {
						this.send(JSON.stringify({ op: 1, d: null }));
					}, heartbeatInterval);
					this.send(
						JSON.stringify({
							op: 2,
							d: {
								token: this.client.token,
								properties: {
									$os: 'linux',
									$browser: 'lostcord',
									$device: 'lostcord'
								}
							}
						})
					);
			}
			try {
				this.client.emit('READY', data);
			} catch (err) {
				console.log(err);
			}
		});
	}

	send(data) {
		this.ws.send(data);
	}
}

module.exports = WebSocketManager;

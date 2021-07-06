const EventEmitter = require('events');
const Request = require('./api/rest/requests');
const WebSocket = require('./api/ws/WebSocket');
const Discord = require('./discord/Discord');

class Client extends EventEmitter {
	constructor(token, options) {
		super();
		this.token = token;
		this.options = Object.assign(
			{
				shards: 1,
				reconnectAttempts: Infinity,
				permissions: 8,
				guild: ''
			},
			options
		);
		this.ws = new WebSocket(this);
		this.request = new Request(this);
		this._discord = new Discord(this);
		this.startTime = 0;
	}

	connect() {
		this.ws.connect();
	}

	get uptime() {
		this.startTime = Date.now();
		return this.startTime;
	}

	get invite() {
		const id = '650136984211292180'; // temp
		return `https://discord.com/oauth2/authorize?client_id=${id}&permissions=${this.options
			.permissions}&response_type=code&scope=applications.commands%20bot`;
	}

	get discord() {
		return this._discord;
	}
}

module.exports = Client;

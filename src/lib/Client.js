'use strict';

const EventEmitter = require('events');
const Request = require('./api/rest/requests');
const WebSocket = require('./api/ws/ws');
const Endpoints = require('./api/rest/Endpoints');

class Client extends EventEmitter {
	constructor(token, options) {
		super();
		this.token = token;
		this.options = Object.assign(
			{
				shards: 1,
				reconnectAttempts: Infinity
			},
			options
		);
		this.ws = new WebSocket(this);
		this.request = new Request(this);
	}

	connect() {}
}

module.exports = Client;

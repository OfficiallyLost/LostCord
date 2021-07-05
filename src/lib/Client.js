'use strict';

const EventEmitter = require('events');
const Request = require('./api/rest/requests');
const Endpoints = require('../lib/api/rest/Endpoints');

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
		this.request = new Request(this);
	}
}

module.exports = Client;

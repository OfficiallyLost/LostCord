const EventEmitter = require('events');
const Request = require('./api/rest/requests');
const WebSocket = require('./api/ws/WebSocket');
const Discord = require('./discord/Discord');
const chalk = require('chalk');

class Client extends EventEmitter {
	constructor(token, options) {
		super();
		this.token = token;
		this.options = Object.assign(
			{
				shards: 1,
				permissions: 8,
				guild: '',
				reconnect: true,
				scopes: []
			},
			options
		);
		this.reconnectAttempts = 0;
		this.status = '';
		this.ws = new WebSocket(this);
		this.request = new Request(this);
		this._discord = new Discord(this);
		this.startTime = 0;
		this.messageChannel = {};
		this.log = (data) => console.log(chalk.greenBright.bold(`[LOGGER] ${data}`));
		this.error = (data) => console.log(chalk.redBright.bold(`[ERROR] ${data}`));

		if (!this.token) return new Error('[TOKEN] You must provide a valid token');
	}

	connect() {
		this.ws.connect();
	}

	get invite() {
		return `https://discord.com/oauth2/authorize?client_id=${this.user.id}&permissions=${this.options
			.permissions}&response_type=code&scope=${this.options.scopes.join('%20') || 'applications.commands%20bot'}`;
	}

	get discord() {
		return this._discord;
	}
	/**
	 * 
	 * @param {Object} param an object for organisation
	 * @param {String} param the channel ID to send the mesage to
	 * @param {String} param the message content to send
	 * @param {Array} param an array of embeds
	 * @param {} param file 
	 * @param {Array} param An array of message components 
	 * @returns A discord message
	 */

	createMessage({ channel, content, embeds, file, components }) {
		if (!content instanceof String) return Promise.reject(new Error('content must be of type String'));
		if (!embeds instanceof Array) return Promise.reject(new Error('embeds must be of type Array'));
		// No idea what type file is
		if (!components instanceof Array) return Promise.reject(new Error('components must be of type Array'));

		try {
			return this.request.createMessage(channel, content, embeds, file, components);
		} catch (error) {
			console.log(error);
		}
	}

	createGlobalCommand({ name, description, options }) {
		this.request.createGuildSlashCommand(this.application.id, name, description, options);
	}

	createGuildCommand({ guild, name, description, options }) {
		this.request.createGuildSlashCommand(this.application.id, guild, name, description, options);
	}
}

module.exports = Client;

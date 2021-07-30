const RequestManager = require('./RequestManager');
const endpoints = require('./Endpoints');

class Request {
	constructor(client) {
		Object.defineProperty(this, 'client', { value: client });
		this.RequestManager = new RequestManager(client);
		this.endpoints = endpoints;
	}

	async getGuildAuditLogs(guildID) {
		if (!guildID) return Promise.reject(new Error('You must enter a guild ID to get data on'));

		return await this.RequestManager.request(
			'GET',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.GUILD_AUDIT_LOGS(guildID)}`
		);
	}

	async getGuild(guildID) {
		if (!guildID) return Promise.reject(new Error('You must enter a guild ID to get data on'));

		return await this.RequestManager.request(
			'GET',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.GET_GUILD(guildID)}`
		);
	}

	async getUser(userID) {
		if (!userID) return Promise.reject(new Error('You must enter a user ID to get data on'));

		return await this.RequestManager.request(
			'GET',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.GET_USER(userID)}`
		);
	}

	async getChannel(channelID) {
		if (!channelID) return Promise.reject(new Error('You must enter a channel ID to get data on'));

		return await this.RequestManager.request(
			'GET',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.GET_CHANNEL(channelID)}`
		);
	}

	async createMessage(channelID, content, embeds, file, components, options) {
		if (!channelID) return Promise.reject(new Error('You must enter a channel ID to send the message to'));

		return await this.RequestManager.request(
			'POST',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.CREATE_MESSAGE(channelID)}`,
			{ content, embeds, file, components, options }
		);
	}
}

module.exports = Request;

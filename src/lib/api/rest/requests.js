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
		return await this.RequestManager.request(
			'GET',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.GET_USER(userID)}`
		);
	}
}

module.exports = Request;

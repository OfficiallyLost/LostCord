const RequestManager = require('./RequestManager');
const endpoints = require('./Endpoints');

class Request {
	constructor(client) {
		// this.client = { token: 'NjUwMTM2OTg0MjExMjkyMTgw.XeG9Pw.eJfaduBg1nzk2HkoOi0NKInezO4' };
		this.RequestManager = new RequestManager(client);
		this.endpoints = endpoints;
	}

	async getGuildAuditLogs(guildID) {
		return await this.RequestManager.request(
			'GET',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.GUILD_AUDIT_LOGS(guildID)}`
		);
	}
}

module.exports = Request;

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

	async getGuildChannels(guildID) {
		if (!guildID) return Promise.reject(new Error('You must enter a guild ID to get channels'));

		return await this.RequestManager.request(
			'GET',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.GET_GUILD_CHANNELS(guildID)}`
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
	async getAvatar(userID, avatar) {
		if (!userID) return Promise.reject(new Error('You must enter a user ID to view their avatar'));
		if (!avatar) return Promise.reject(new Error('You must enter an avatar to view their avatar'));

		return await this.RequestManager.request(
			'GET',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.GET_AVATAR(userID, avatar)}`
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

	async createGlobalSlashCommand(applicationID, guildID, params) {
		console.log(`application id ${JSON.stringify(applicationID)}\nparams:${JSON.stringify(params)}`);
		if (params.name.match('^[w-]{1,32}$')) {
			return Promise.reject(new Error('The command name must match "^[w-]{1,32}$"'));
		}

		if (!applicationID) return Promise.reject(new Error('You must enter an application ID'));
		if (!params.name) return Promise.reject(new Error('You must enter the command name'));
		if (!params.description) return Promise.reject(new Error('You must enter the command description'));
		if (!params.options) return Promise.reject(new Error('You must enter the command options'));

		return await this.RequestManager.request(
			'POST',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.CREATE_GLOBAL_SLASH_COMMAND(
				applicationID,
				guildID
			)}`,
			{ name: params.name.toLowerCase(), description: params.description, options: params.option }
		);
	}

	async createGuildSlashCommand(applicationID, guildID, params) {
		if (params.name.match('^[w-]{1,32}$')) {
			return Promise.reject(new Error('The command name must match "^[w-]{1,32}$"'));
		}

		if (!applicationID) return Promise.reject(new Error('You must enter an application ID'));
		if (!params.name) return Promise.reject(new Error('You must enter the command name'));
		if (!params.description) return Promise.reject(new Error('You must enter the command description'));
		if (!params.options) return Promise.reject(new Error('You must enter the command options'));

		return await this.RequestManager.request(
			'POST',
			`${this.RequestManager.constants.BASE_URL}${this.endpoints.CREATE_GUILD_SLASH_COMMAND(
				applicationID,
				guildID
			)}`,
			{ name: params.name.toLowerCase(), description: params.description, options: params.options }
		);
	}
}

module.exports = Request;

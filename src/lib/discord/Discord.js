const request = require('../api/rest/requests');

class Discord {
	constructor(client) {
		Object.defineProperty(this, 'client', { value: client });
	}

	get guild() {
		if (!this.client.options.guild) {
			return Promise.reject(new Error('You must add a guild ID to the client options'));
		}

		const data = this.client.request.RequestManager
			.request(
				'GET',
				`${this.client.request.RequestManager.constants.BASE_URL}${this.client.request.endpoints.GET_GUILD(
					this.client.options.guild
				)}`
			)
			.then((e) => e.data);

		data.then((e) => {
			e.invite = this.client.request.RequestManager.constants.DISCORD.INVITE;
		});
		return data;
	}
}

module.exports = Discord;

const constants = require('../../Constants');
const axios = require('axios');

class RequestManager {
	constructor(client) {
		Object.defineProperty(this, 'client', { value: client });
		this.constants = constants;
	}

	async request(method, url, data) {
		const options = {
			method,
			url,
			headers: {
				Authorization: `Bot ${this.client.token}`,
				'Content-Type': 'application/json'
			},
			data
		};

		return await axios(options);
	}
}

module.exports = RequestManager;

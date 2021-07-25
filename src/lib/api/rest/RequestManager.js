const constants = require('../../Constants');
const axios = require('axios');

class RequestManager {
	constructor(client) {
		Object.defineProperty(this, 'client', { value: client });
		this.constants = constants;
	}

	request(method, url, data) {
		const options = {
			url,
			method,
			headers: {
				Authorization: `Bot ${this.client.token}`,
				'Content-Type': 'applicaton/json'
			},
			data
		};

		return axios(options);
	}
}

module.exports = RequestManager;

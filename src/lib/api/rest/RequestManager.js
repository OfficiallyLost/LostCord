const constants = require('../../Constants');
const axios = require('axios');

class RequestManager {
	constructor() {
		this.constants = constants;
		console.log(this);
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

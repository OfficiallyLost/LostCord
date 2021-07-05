const Client = require('./src/lib/Client');

function Lost(token, options) {
	return new Client(token, options);
}

module.exports = Lost;

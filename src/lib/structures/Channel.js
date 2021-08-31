const Base = require('./Base');

class Channel extends Base {
	constructor(raw, client) {
		super(raw.id);
		this.raw = raw;
		Object.defineProperty(this, 'client', { value: client });
	}

	get type() {
		return this.raw.type;
	}

	get messages() {
		return async function() {
			await this.client.request.getChannelMessages(raw.id);
		};
	}
}

module.exports = Channel;

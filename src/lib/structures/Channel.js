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
}

module.exports = Channel;

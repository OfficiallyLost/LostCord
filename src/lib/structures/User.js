const Base = require('./Base');

class User extends Base {
	constructor(raw, client) {
		super(raw.id);
		this.raw = raw;
		Object.defineProperty(this, 'client', { value: client });
	}
}

module.exports = User;

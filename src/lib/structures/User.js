const Base = require('./Base');

class User extends Base {
	constructor(raw, client) {
		super(raw.id);
		this.raw = raw;
		Object.defineProperty(this, 'client', { value: client });
	}
	get username() {
		return console.log(this.client);
	}
}

module.exports = User;

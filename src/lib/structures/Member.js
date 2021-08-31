const Base = require('./Base');

class Member extends Base {
	constructor(raw, client) {
		super(raw.id);
		this.raw = raw;
		this.game = null;
	}
}

module.exports = Member;

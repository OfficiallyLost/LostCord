const Base = require('./Base');
const constants = require('../Constants');

class Message extends Base {
	constructor(raw, client) {
		super(raw.id);
		this.raw = raw;
		Object.defineProperty(this, 'client', { value: client });
	}

	get url() {
		return `${constants.DISCORD_URL}channels/${this.raw.guild_id}/${this.raw.channel_id}/${this.raw.id}`;
	}
}

module.exports = Message;

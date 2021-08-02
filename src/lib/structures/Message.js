const Base = require('./Base');
const constants = require('../Constants');
const TextChannel = require('./TextChannel');
const User = require('./User');

class Message extends Base {
	constructor(raw, client) {
		super(raw.id);
		this.raw = raw;
		this.raw.timestamp = Date.parse(this.raw.timestamp);
		this.raw.author = new User(raw.author, client);
		Object.defineProperty(this, 'client', { value: client });
		Object.defineProperty(this, 'request', { value: client.request });
	}

	get url() {
		return `${constants.DISCORD_URL}channels/${this.raw.guild_id}/${this.raw.channel_id}/${this.raw.id}`;
	}

	get channel() {
		if (Object.keys(this.client.messageChannel).length === 0) {
			return this.request.getChannel(this.raw.channel_id).then((data) => {
				return (this.client.messageChannel = new TextChannel(data.data, this.client));
			});
		}

		return Promise.resolve(this.client.messageChannel);
	}
}

module.exports = Message;

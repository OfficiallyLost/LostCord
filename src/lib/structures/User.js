const Base = require('./Base');

class User extends Base {
	constructor(raw, client) {
		super(raw.id);
		this.username = raw.username;
		this.discriminator = raw.discriminator;
		this.avatar = raw.avatar;
		this.bot = !!raw.bot;
		this.public_flags = raw.public_flags;
		this.system = !!raw.system;
		this.mfaEnabled = !!raw.mfa_enabled;
		Object.defineProperty(this, 'client', { value: client });
	}

	get avatarURL() {
		if (!this.avatar) {
			return this.defaultAvatar();
		};
		
		return this.client.requests.avatarURL(this._id, this.avatar);
	}

	get mention() {
		return `<@${this._id}>`;
	}

	get defaultAvatar() {
		return this.discriminator % 5;
	}
}

module.exports = User;

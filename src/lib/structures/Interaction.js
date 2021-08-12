const Base = require('./Base');

class Interaction extends Base {
	constructor(raw, client) {
		super(raw.id);
		this.raw = raw;
		Object.defineProperty(this, 'client', { value: client });
		Object.defineProperty(this, 'request', { value: client.request });
	}

	reply(id, token, { content, embeds, file, components }) {
		this.request.createSlashCommandResponse(id, token, { content, embeds, file, components });
	}

	edit(id, token, { content }) {
		this.request.editSlashCommandResponse(id, token, { content });
	}
}

module.exports = Interaction;

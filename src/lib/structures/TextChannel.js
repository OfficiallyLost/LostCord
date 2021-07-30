const Channel = require('./Channel');

class TextChannel extends Channel {
	constructor(raw, client) {
		super(raw.id, client);
		this.raw = raw;
		Object.defineProperty(this, 'client', { value: client });
	}

	get mention() {
		return `<#${this.raw.id}>`;
	}

	createMessage({ content, embeds, file, components }) {

		if (!content instanceof String) return Promise.reject(new Error('content must be of type String'));
		if (!embeds instanceof Array) return Promise.reject(new Error('embeds must be of type Array'));
		// No idea what type file is
		if (!components instanceof Array) return Promise.reject(new Error('components must be of type Array'));

		try {
			return this.client.request.createMessage(this.raw.id, content, embeds, file, components);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = TextChannel;

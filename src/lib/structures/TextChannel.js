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
	/**
	 * 
	 * @param {Object} param an object for organisation
	 * @param {String} param the message content to send
	 * @param {Array} param an array of embeds
	 * @param {} param file 
	 * @param {Array} param An array of message components 
	 * @returns A discord message
	 */

	createMessage({ content, embeds, file, components }) {
		return this.client.createMessage({ channel: this.raw.id, content, embeds, file, components });
	}
}

module.exports = TextChannel;

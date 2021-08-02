const LostCord = require('../index');
const client = new LostCord('', {
	guild: ''
});

client.on('reconnect', (message) => {
	console.log(message);
});

client.on('messageCreate', async (message) => {
	if (message.raw.guild_id !== '850049610776576000') return;
	await client.createCommand();

	if (message.raw.content.startsWith('e')) {
		try {
			const msg = message.raw.content.slice(2);
			let ev = eval(msg);
			if (typeof ev !== 'string') {
				ev = require('util').inspect(ev);
			}

			return (await message.channel).createMessage({
				content: `\`\`\`js\n${ev}\`\`\``
			});
		} catch (e) {
			return (await message.channel).createMessage({ content: `\`\`\`js\n${e}\`\`\`` });
		}
	}
	// (await message.channel).createMessage({ content: 'e message' });
	console.log(`${message.raw.author.username} said ${message.raw.content} | ${client.user.username}`);
});

client.connect();

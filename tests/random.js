const LostCord = require('../index');
const client = new LostCord('', {
	guild: ''
});

client.on('reconnect', (message) => {
	console.log(message);
});

client.on('interactionCreate', async (command) => {
	if (command.raw.data.name === 'test') {
		command.reply(command.raw.id, command.raw.token, {
			embeds: [
				{
					title: 'hi'
				}
			]
		});
		command.edit(command.raw.id, command.raw.token, { content: 'hi' });
	}
});

client.on('messageCreate', async (message) => {
	if (message.raw.author.id !== '475371795185139712') return;

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

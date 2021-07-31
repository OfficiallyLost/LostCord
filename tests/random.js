const LostCord = require('../index');
const client = new LostCord('', {
	guild: ''
});

client.on('messageCreate', async (message) => {
	if (message.raw.author.id !== '') return;
	console.log(client);
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
	(await message.channel).createMessage({
		content: `${(await message.channel).type} | ${message.raw.content} | ${(await message.channel)
			.mention}\nInvite me! <${client.invite}>`,
		embeds: [ { title: 'hi' } ]
	});
	console.log(`${message.raw.author.username} said ${message.raw.content} | ${client.user.raw.username}`);
});

client.connect();

const LostCord = require('../index');
const client = new LostCord('', {
	guild: ''
});
client.on('messageCreate', async (message) => {
	if (message.raw.author.id !== '') return;

	(await message.channel).createMessage({
		content: [ `${(await message.channel).type} | ${message.raw.content}` ],
		embeds: [ { title: 'hi' } ]
	});
	console.log(`${message.raw.author.username} said ${message.raw.content} | ${client.user.raw.username}`);
});

client.connect();

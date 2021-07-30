const LostCord = require('../index');
const client = new LostCord('', {
	guild: ''
});

client.on('messageCreate', async (message) => {
	(await message.channel).createMessage({ content: 'i', embeds: [ { title: 'hi' } ] });
	console.log(`${message.raw.author.username} said ${message.raw.content} | ${client.user.raw.username}`);
});

client.connect();

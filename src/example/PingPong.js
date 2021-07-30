const LostCord = require('lostcord');
const client = new LostCord('YOUR_TOKEN');

client.on('messageCreate', async (message) => {
	if (message.raw.content === '!ping') {
		(await message.channel).createMessage({ content: 'Pong!' });
	}
});

client.connect();

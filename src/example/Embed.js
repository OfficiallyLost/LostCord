const LostCord = require('lostcord');
const client = new LostCord('YOUR_TOKEN');

client.on('messageCreate', async (message) => {
	if (message.raw.content === '!embed') {
		(await message.channel).createMessage({
			embeds: [
				{
					title: 'This is the embed title',
					description: 'This is the embed description',
					fields: [
						{
							name: 'Field name',
							value: 'Field value',
							inline: false
						}
					]
				},
				{
					title: 'This is the embed title 2',
					description: 'This is the embed description 2',
					fields: [
						{
							name: 'Field name 2',
							value: 'Field value 2',
							inline: false
						}
					]
				}
			]
		});
	}
});

client.connect();

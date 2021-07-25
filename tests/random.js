const LostCord = require('../index');
const client = new LostCord('token', {
	guild: 'guld id optional'
});

client.on('messageCreate', (message) => {
	console.log(`${message.raw.author.username} said ${message.raw.content}`);
});

client.connect();
console.log(client.user);

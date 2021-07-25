const LostCord = require('../index');
const client = new LostCord('', {
	guild: ''
});

client.on('messageCreate', (message) => {
	console.log(message);
});

client.connect();

const LostCord = require('../index');
const client = new LostCord('', {
	guild: '650128487511883796'
});

client.on('messageCreate', (message) => console.log(message));

client.connect();

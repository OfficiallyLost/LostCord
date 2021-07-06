const LostCord = require('../index');
const client = new LostCord('put ur token here', {
	guild: 'a random guild id'
});

console.log(client.discord.guild.then((e) => console.log(e)));

// console.log(client.discord.client.request);
// client.on('READY', () => console.log('online'));

// client.connect();

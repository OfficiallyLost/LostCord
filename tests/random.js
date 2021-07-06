const LostCord = require('../index');
const client = new LostCord('token here');

client.on('READY', () => console.log('online'));

client.connect();

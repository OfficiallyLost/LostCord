# A NodeJS Discord Library for [Discord](https://discord.com)

LostCord is a promise based, object-orientated and easily usable Discord Library, mainly orientated around myself, but can be used for everyone. An understanding of NodeJS is required.

# Installation 
```js
npm install lostcord
```

# Examples
```js
const LostCord = require('lostcord');
const client = new LostCord('YOUR_TOKEN');

client.on('messageCreate', async (message) => {
    if (!message.raw.author.bot) return;
    
    if (message.raw.content === '!ping') {
        (await message.channel).createMessage({ content: 'Pong!' });
    }
});

client.connect();
```

```js
const LostCord = require('lostcord');
const client = new LostCord('YOUR_TOKEN');

client.on('messageCreate', async (message) => {
    if (!message.raw.author.bot) return;
   
   if (message.raw.content === '!invite') {
        try {
            (await message.channel).createMessage({ content: client.invite })
            client.log('someone wants me :D')
        } catch (error) {
            // this won't happen but just showing <Client>.error
            client.error(error)
        }
   }
});
```
# Help
If you are struggling / need help with LostCord, feel free to reach out to me, just join my [discord server](https://discord.gg/FWTRPS9)

# Contributing
Fork, code, submit PR. 

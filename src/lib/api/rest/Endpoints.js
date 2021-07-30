module.exports.GET_GUILD = (guildID) => `/guilds/${guildID}`;
module.exports.GET_GUILD_CHANNELS = (guildID) => `/guilds/${guildID}/channels`;
module.exports.GUILD_AUDIT_LOGS = (guildID) => `/guilds/${guildID}/audit-logs`;
module.exports.GET_CHANNEL = (channelID) => `/channels/${channelID}`;
module.exports.CREATE_MESSAGE = (channelID) => `/channels/${channelID}/messages`;

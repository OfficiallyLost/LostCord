module.exports.GET_GUILD = (guildID) => `/guilds/${guildID}`;
module.exports.GUILD_AUDIT_LOGS = (guildID) => `/guilds/${guildID}/audit-logs`;
module.exports.GET_CHANNEL = (channelID) => `/channels/${channelID}`;
module.exports.CREATE_MESSAGE = (channelID) => `/channels/${channelID}/messages`;

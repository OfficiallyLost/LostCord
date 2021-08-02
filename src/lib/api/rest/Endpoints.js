module.exports.GET_GUILD = (guildID) => `/guilds/${guildID}`;
module.exports.GET_GUILD_CHANNELS = (guildID) => `/guilds/${guildID}/channels`;
module.exports.GUILD_AUDIT_LOGS = (guildID) => `/guilds/${guildID}/audit-logs`;
module.exports.GET_CHANNEL = (channelID) => `/channels/${channelID}`;
module.exports.GET_USER = (userID) => `/users/${userID}`;
module.exports.CREATE_MESSAGE = (channelID) => `/channels/${channelID}/messages`;
module.exports.CREATE_GLOBAL_SLASH_COMMAND = (applicationID) => `/applications/${applicationID}/commands`;
module.exports.CREATE_GUILD_SLASH_COMMAND = (applicationID, guildID) =>
	`/applications/${applicationID}/guilds/${guildID}/commands`;
module.exports.GET_AVATAR = (userID, avatar) => `/users/${userID}/${avatar}`;

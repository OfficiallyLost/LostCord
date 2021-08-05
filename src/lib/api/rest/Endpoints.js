module.exports.GET_GUILD = (guildID) => {
	return `/guilds/${guildID}`;
};

module.exports.GET_GUILD_CHANNELS = (guildID) => {
	return `/guilds/${guildID}/channels`;
};

module.exports.GUILD_AUDIT_LOGS = (guildID) => {
	return `/guilds/${guildID}/audit-logs`;
};

module.exports.GET_CHANNEL = (channelID) => {
	return `/channels/${channelID}`;
};

module.exports.GET_USER = (userID) => {
	return `/users/${userID}`;
};

module.exports.CREATE_MESSAGE = (channelID) => {
	return `/channels/${channelID}/messages`;
};

module.exports.CREATE_GLOBAL_SLASH_COMMAND = (applicationID) => {
	return `/applications/${applicationID}/commands`;
};

module.exports.REPLY_TO_SLASH_COMMAND = (interactionID, interactionToken) => {
	return `/interactions/${interactionID}/${interactionToken}/callback`;
};

module.exports.EDIT_SLASH_COMMAND_RESPONSE = (applicationID, interactionToken) => {
	return `/webhooks/${applicationID}/${interactionToken}/messages/@original`;
};

module.exports.CREATE_GUILD_SLASH_COMMAND = (applicationID, guildID) => {
	return `/applications/${applicationID}/guilds/${guildID}/commands`;
};

module.exports.GET_AVATAR = (userID, avatar) => {
	return `/users/${userID}/${avatar}`;
};

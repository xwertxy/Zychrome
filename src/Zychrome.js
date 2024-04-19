'use strict';

const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
const ConfigGetter = require('./config/ConfigGetter.js');
const ClientStatus = require('./presence/ClientStatus.js');
const ZychromeSharder = require('./server/Shard.js');
const Panel = require('./server/Panel.js');
const ZychromeVariables = require("./utils/BotVariables.js");

const ZychromeBot = new AoiClient({
    intents: [
		"MessageContent", 
		"Guilds", 
		"GuildMessages", 
		"GuildMessageReactions",
		"GuildInvites",
		"GuildBans",
		"GuildMessageReactions",
		"GuildVoiceStates",
		"GuildPresences",
		"GuildWebhooks",
		"GuildMembers",
		"GuildEmojisAndStickers",
		"AutoModerationConfiguration",
		"AutoModerationExecution",
		"GuildMessageTyping",
	],
    events: [
		"onMessage", 
		"onInteractionCreate", 
		"onMessageDelete", 
		"onMessageUpdate",
		"onMessageDeleteBulk",
		"onReactionAdd",
		"onReactionRemove",
		"onReactionRemoveAll",
		"onInviteCreate",
		"onInviteDelete",
		"onGuildJoin",
		"onGuildLeave",
		"onGuildUpdate",
		"onGuildUnavailable",
		"onRoleCreate",
		"onRoleUpdate",
		"onRoleDelete",
		"onChannelCreate",
		"onChannelUpdate",
		"onChannelDelete",
		"onChannelPinsUpdate",
		"onStageInstanceCreate",
		"onStageInstanceUpdate",
		"onStageInstanceDelete",
		"onThreadCreate",
		"onThreadUpdate",
		"onThreadDelete",
		"onThreadListSync",
		"onThreadMemberUpdate",
		"onThreadMembersUpdate",
		"onJoin",
		"onLeave",
		"onMemberUpdate",
		"onMemberAvailable",
		"onMembersChunk",
		"onEmojiCreate",
		"onEmojiDelete",
		"onEmojiUpdate",
		"onStickerCreate",
		"onStickerDelete",
		"onStickerUpdate",
		"onBanAdd",
		"onBanRemove",
		"onVoiceStateUpdate",
		"onPresenceUpdate",
		"onTypingStart",
		"onWebhooksUpdate",
		"onInteractionCreate",
		"onApplicationCommandPermissionsUpdate",
		"onUserUpdate",
		"onAutoModerationActionExecution",
		"onAutoModerationRuleDelete",
		"onAutoModerationRuleCreate",
		"onAutoModerationRuleUpdate",
		"onVariableCreate",
		"onVariableDelete",
		"onVariableUpdate",
		"onFunctionError"
	],
    prefix: "$getServerVar[botPrefix]",
    token: ConfigGetter.Get().bot.token,
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["ZychromeBot"],
        securityKey: ConfigGetter.Get().bot.securityKey,
    }
});

const CommandLoader = new LoadCommands(ZychromeBot);

const ZychromeVoice = new AoiVoice(ZychromeBot, {
	requestOptions: {
		offsetTimeout: ConfigGetter.Get().music.offsetTimeout,
		soundcloudLikeTrackLimit: ConfigGetter.Get().music.soundcloudLikeTrackLimit,
		spotifyPlaylistLimit: ConfigGetter.Get().music.spotifyPlaylistLimit,
		youtubePlaylistLimit: ConfigGetter.Get().music.youtubePlaylistLimit,
	},
	devOptions: {
		debug: ConfigGetter.Get().music.debug
	}
});


// Load all modules
ZychromeBot.variables(ZychromeVariables);
CommandLoader.load(ZychromeVoice.cmds, "./src/voice/");
ZychromeBot.loadCommands("./src/commands/", true);
ZychromeBot.loadCommands("./src/events/", true); // event handler?
Panel.Launch(ZychromeBot);
ZychromeSharder.StartProcess();
ClientStatus.Init(ZychromeBot);
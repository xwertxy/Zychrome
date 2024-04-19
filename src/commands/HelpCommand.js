module.exports = ({
	name: 'help',
	category: 'universal',
	type: "interaction",
	description: 'Help for the Zychrome Commands!', 
	prototype: "slash",
	$if: "old",
	code: `
$interactionReply[;
$if[$slashOption[category]==;]
{newEmbed: {
	{color: Blue}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description: 
		Hello there! 😁 **$username**!
		These are the available commands according to the category.
	}
	{field: \`/help moderation\`:View Server Moderation Commands (*Requires Permissions*):yes}
	{field: \`/help bot\`:View Bot Internal Commands:yes}
	{field: \`/help music\`:View Music Bot Commands:yes}
	{field: \`/help fun\`:View Fun Commands:yes}
	{field: \`/help game\`:View Game Commands:yes}
	{field: \`/help leveling\`:View Level System Commands:yes}
	{field: \`/help admin\`:View Administrative Commands:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$elseIf[$slashOption[category]==moderation]
{newEmbed: {
	{color: Red}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description: 
		These are the moderation commands list and usage.
		**This requires permissions to execute these commands.**
	}
	{field: \`/ban <userId|mention> [reason]\`:Bans member on current server with reason.:yes}
	{field: \`/kick <userId|mention> [reason]\`:Kicks member on current server with reason.:yes}
	{field: \`/pardon <userId> [reason]\`:Pardons a member with a reason.:yes}
	{field: \`/timeout <userId|mention> <duration> [reason] OR /timeout remove <userId|mention>\`:Temporary timeouts or remove timeout the user with reason.:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endElseIf
$elseIf[$slashOption[category]==bot]
{newEmbed: {
	{color: Orange}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description:
		These are the bot internal commands list and usage.
		**Some commands are for only bot owner.**
	}
	{field: \`/ping\`:Returns the current bot latency statistics.:yes}
	{field: \`/botinfo OR /stats\`:Returns the current bot information.:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endElseIf
$elseIf[$slashOption[category]==music]
{newEmbed: {
	{color: Yellow}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description:
		These are the voice music commands list and usage.
		**This requires to join first in a voice channel to execute!**
	}
	{field: \`/play <music_name>\`:Play a music.:yes}
	{field: \`/skip\`:Skips the current music.:yes}
	{field: \`/pause OR /stop\`:Stop or Pause the current music.:yes}
	{field: \`/loop\`:Loop the current music.:yes}
	{field: \`/resume\`:Resume the current music.:yes}
	{field: \`/clearqueue\`:Clear all queued music.:yes}
	{field: \`/nowplaying\`:Current playing music information.:yes}
	{field: \`/volume <integer: 0-100>\`:Adjust the volume of the currently playing music.:yes}
	{field: \`/playspeed <1, 2, 3, 4>\`:Sets music speed can be 1x, 2x, 3x, or 4x.:yes}
	{field: \`/queue <music_name> OR /queue list\`:Add to queue the music or view all list of queued music.:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endElseIf
$elseIf[$slashOption[category]==fun]
{newEmbed: {
	{color: Orange}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description: These are the fun commands list and usage.}
	{field: \`/cat [options]\`:Sends a random cats images!:yes}
	{field: \`/dog [options]\`:Sends a random dogs images!:yes}
	{field: \`/memes [options]\`:Sends a memes images.:yes}
	{field: \`/fact [options]\`:Sends a random fact's speech.:yes}
	{field: \`/anime [options]\`:Sends a random anime's pictures.:yes}
	{field: \`/translate <country_speech_code> <translate_speech_code> <text>\`:Translate a message.:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endElseIf
$elseIf[$slashOption[category]==game]
{newEmbed: {
	{color: Green}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description:
		These are the game commands list and usage.
		**Soon! More games!**
	}
	{field: \`/kill OR /execute <userId|mention>\`:You bastard, killed the guy.:yes}
	{field: \`/kiss <userId|mention>\`:Ugh, don't kiss that thing.:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endElseIf
$elseIf[$slashOption[category]==utility]
{newEmbed: {
	{color: Aqua}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description:
		These are the utility commands list and usage.
	}
	{field: \`/userinfo <userId|mention>\`:View user information on current server.:yes}
	{field: \`/serverinvite [options]\`:Creates Invitation to the current server by the bot!:yes}
	{field: \`/invite [options]\`:Sends the Invitation link of the bot!:yes}
	{field: \`/serverinfo [options]\`:Sends the current server information.:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endElseIf
$elseIf[$slashOption[category]==leveling]
{newEmbed: {
	{color: Lime}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description:
		These are the leveling commands list and usage.
		**Only subscribed leveling channels are allowed to use these commands.**
	}
	{field: \`/level [userId|mention]\`:Checks your current level or another user. *Only executed in a subscribed channel!*:yes}
	{field: \`/resetLevels [options]\`:Resets the level system database in the current server. *Requires Administrator Permission!*:yes}
	{field: \`/setLevelMessage <text>\`:Configure Level Message XP!:yes}
	{field: \`/setXP <amount>\`:Sets the XP gained in every message. *Requires Administrator Permission!*:yes}
	{field: \`/setMaxXP <amount>\`:Sets the Max XP in every level. *Requires Administrator Permission!*:yes}
	{field: \`/unSubscribeLeveling <channel_id>\`:Unsubscribe or Disables the Level System from a certain channel. *Requires Administrator Permission!*:yes}
	{field: \`/subscribeLeveling <channel_id>\`:Subscribe or Enables the Level System from a certain channel. *Requires Administrator Permission!*:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endElseIf
$elseIf[$slashOption[category]==admin]
{newEmbed: {
	{color: Red}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description: 
		These are the administrative commands list and usage.
		**Only with admin permissions can use this commands!**
	}
	{field: \`/purge <count>\`:Purge or Clear messages in a channel. Limit of 100 deleted message per channel. **As of discord is now limiting the message to be removed.**:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endElseIf
$else
{newEmbed: {
	{color: Red}
	{author: Zychrome v$packageVersion:$userAvatar[$clientid]}
	{description: 
		Invalid category: \`$slashOption[category]\`
	}
	{field: \`/help moderation\`:View Server Moderation Commands (*Requires Permissions*):yes}
	{field: \`/help bot\`:View Bot Internal Commands:yes}
	{field: \`/help music\`:View Music Bot Commands:yes}
	{field: \`/help fun\`:View Fun Commands:yes}
	{field: \`/help game\`:View Game Commands:yes}
	{field: \`/help leveling\`:View Level System Commands:yes}
	{field: \`/help admin\`:View Administrative Commands:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endIf
$cooldown[1s;
{newEmbed: {
	{color: Red}
	{author:❌ Too fast!:$userAvatar[$clientid]}
	{description: 😖 I'm in cooldown! Please wait for **%time%** seconds before executing another one!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
]
`
});
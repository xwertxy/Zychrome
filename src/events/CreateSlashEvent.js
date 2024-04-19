module.exports = {
	name: "CreateSlashEvent",
	type: "ready",
	channel: "",
	code: `
$createApplicationCommand[global;ping;Check ping of the bot!;true;false;slash]
$createApplicationCommand[global;cat;Sends a random cat picture!;true;false;slash]
$createApplicationCommand[global;dog;Sends a random dog picture!;true;false;slash]
$createApplicationCommand[global;dadjokes;Sends a random daddy jokes!;true;false;slash]
$createApplicationCommand[global;purge;Purge or Bulk delete amount of messages from a user or to the channel.;true;false;slash;[{
    "name": "amount",
    "description": "Amount of message do you want to delete..",
    "required": true,
    "type": 3
},{
    "name": "user",
    "description": "Select a user to delete message from channel.",
    "required": false,
    "type": 6
},{
    "name": "channel",
    "description": "The channel do you want to bulk delete.",
    "required": false,
    "type": 5
}]]
$createApplicationCommand[global;memes;Sends a random memes!;true;false;slash;[{
    "name": "nsfw",
    "description": "Do you want nsfw memes? Why??!",
    "required": false,
    "type": 3
},{
    "name": "spoiler",
    "description": "Do you want spoil the message??",
    "required": false,
    "type": 3
}]]
$createApplicationCommand[global;serverinfo;Check server current information!;true;false;slash]
$createApplicationCommand[$getVar[masterGuild];reboot;Reboots the Bot (Only for Bot Owner!);true;false;slash]
$createApplicationCommand[$getVar[masterGuild];reload;Reloads the Bot (Only for Bot Owner!);true;false;slash]
$createApplicationCommand[global;help;Help for the Zychrome Commands!;true;false;slash;[{
    "name": "category",
    "description": "What category do you want to see?",
    "required": false,
    "type": 3
}]]
$createApplicationCommand[global;userinfo;Check user current information!;true;false;slash;[{
    "name": "user",
    "description": "Who is the user do you want to see current information?",
    "required": true,
    "type": 6
}]]
$log[Successfully loaded all slash commands!]
`
}
'use strict';

module.exports = {
	name: "serverinfo",
	category: 'utility',
	prototype: "slash",
	type: "interaction",
	description: 'Check server current information!',
	code: `
$interactionReply[;

$cooldown[3s;
{newEmbed: {
	{color: Red}
	{author:❌ Too fast!:$userAvatar[$clientid]}
	{description: 😖 I'm in cooldown! Please wait for **%time%** seconds before executing another one!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

{newEmbed: {
	{color: Green}
	{author: $guildName[$guildID]:$userAvatar[$authorID;2048;true;webp]}
	{thumbnail: $guildIcon[$guildID]}
	{field: Server Creation Date:$creationDate[$guildID;time]:yes}
	{field: Server Features:$replaceText[$replaceText[$checkCondition[$guildFeatures[$guildID;true]==];true;No Features];false;
		\`\`\`$guildFeatures[$guildID;true]\`\`\`
	]:yes}
	{field: Server Verification:$if[$guildVerificationLevel[$guildID]==0;No Server Verification;Level $guildVerificationLevel[$guildID]]:yes}
	{field: Server Ban Count:**$banCount** are currently banned.:yes}
	{field: Server Roles:**$roleCount[$guildID;true]** roles.:yes}
	{field: Server Emojis:**$emojiCount[$guildID]** emojis.:yes}
	{field: Server Boost: $guildBoostCount[$guildID] $if[$guildBoostCount[$guildID]>1;Boosts;Boost] ($if[$guildBoostLevel[$guildID]==0;No Level;Level $guildBoostLevel[$guildID]]):yes}
	{field: Server Channels:$if[$channelCount[$guildID;Text]>1;Channels;Channel] Text, $channelCount[$guildID;Voice] Voice $if[$channelCount[$guildID;Voice]>1;Channels;Channel]:yes}
	{field: Server Description:$replaceText[$replaceText[$checkCondition[$guildDescription[$guildID]==];true;No Description];false;$guildDescription[$guildID]]:yes}
	{field: Server Members:
		🟢 **$sum[$membersCount[$guildID;idle;true];$membersCount[$guildID;dnd;true];$membersCount[$guildID;online;true]]** Online Users 
		⚫ **$membersCount[$guildID;offline;no]** Offline Users
		✅ **$membersCount[$guildID]** Total Users
	:yes}
	{field: Server Owner:<@$guildOwnerID[$guildID]> is the server owner.:yes}
	{field: Server ID:\`$guildID\`:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
]
`
}

'use strict';

module.exports = ({
	name: 'purge',
	category: 'admin',
	type: "interaction",
	description: 'Purge or clear messages in the channel!', 
	prototype: "slash",
	code: `
$interactionReply[;

$cooldown[10s;
{newEmbed: {
	{color: Red}
	{author:❌ Too fast!:$userAvatar[$clientid]}
	{description: 😖 I'm in cooldown! Please wait for **%time%** seconds before executing another one!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$hasPerms[$guildId;$authorId;administrator]==true;
{newEmbed: {
	{color: Red}
	{author:❌ Error!!:$userAvatar[$clientid]}
	{description: You do not have \`Administrator\` permission to execute this command!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[amount]<101;{newEmbed: {
	{color: Red}
	{author: ❌ Error!:$userAvatar[$clientid]}
	{description: Sorry, but i cannot delete over 100+ messages in particular message.}
	{footer: Powered by ZychromeBot (c) 2024}
}}]


$clear[$if[$slashOption[channel]==;$channelId;$findGuildChannel[$slashOption[channel]]];$slashOption[amount];$if[$slashOption[user]!=;user:$findMember[$slashOption[user]]]]
{newEmbed: {
	{color: Green}
	{author: ✅ Success!:$userAvatar[$clientid]}
	{description: I've successfully purged **$slashOption[amount] message!**}
	{footer: Powered by ZychromeBot (c) 2024}
}}

]
`
});
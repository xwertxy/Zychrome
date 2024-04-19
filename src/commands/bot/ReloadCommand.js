'use strict';

module.exports = ({
	name: 'reload',
	category: 'bot',
	$if: "old",
	type: "interaction",
	prototype: "slash",
	description: 'Reloads the Bot (Only for Bot Owner!)', 
	code: `
$interactionReply[;

$cooldown[3s;
{newEmbed: {
	{color: Red}
	{author:❌ Too fast!:$userAvatar[$clientid]}
	{description: 😖 I'm in cooldown! Please wait for **%time%** seconds before executing another one!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$if[$checkContains[$authorID;$clientOwnerIDs]==false]
{newEmbed: {
	{author: ❌ Error!:$userAvatar[$clientid]}
	{description: **Only <@$clientOwnerIDs> is allowed to use this command!**}
	{color: Red}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$else
$updateCommands
{newEmbed: {
	{author: ✔ Success!:$userAvatar[$clientid]}
	{description: 🎉 Zychrome is now successfully reloaded!}
	{color: Green}
	{footer: Powered by ZychromeBot (c) 2024}
}}
$endIf
]
`
});

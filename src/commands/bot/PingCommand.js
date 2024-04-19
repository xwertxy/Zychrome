'use strict';

module.exports = ({
	name: 'ping',
	category: 'bot',
	type: "interaction",
	prototype: "slash",
	$if: "old",
	description: 'Check ping of the bot!', 
	code: `
$interactionReply[;

$if[$ping<50]
{newEmbed: {
	{footer: Powered by ZychromeBot (c) 2024}
	{author:🟢 Pong! Current Ping:$userAvatar[$clientid]}
	{image:https://somlicab.sirv.com/New%20Projects.png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44}
	{color: Green}
}}
$elseif[$ping<250]
{newEmbed: {
	{footer: Powered by ZychromeBot (c) 2024}
	{author: 🟡 Pong! Current Ping:$userAvatar[$clientid]}
	{image: https://somlicab.sirv.com/New%20Project%20(2).png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44}
	{color: Yellow}
}}
$endElseif
$elseif[$ping<350]
{newEmbed: {
	{footer: Powered by ZychromeBot (c) 2024}
	{author: 🟠 Pong! Current Ping:$userAvatar[$clientid]}
	{image: https://somlicab.sirv.com/New%20Project%20(1).png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44}
	{color: Orange}
}}
$endElseif
$elseif[$ping<600]
{newEmbed: {
	{footer: Powered by ZychromeBot (c) 2024}
	{author: 🔴 Pong! Current Ping:$userAvatar[$clientid]}
	{image: https://somlicab.sirv.com/New%20Project.png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44}
	{color: Red}
}}
$endElseIf
$endif
$cooldown[3s;
{newEmbed: {
	{color: Red}
	{author:❌ Too fast!:$userAvatar[$clientid]}
	{description: 😖 I'm in cooldown! Please wait for **%time%** seconds before executing another one!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
]
`
});
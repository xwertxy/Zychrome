'use strict';

module.exports = ({
	name: 'dadjokes',
	prototype: 'slash',
	type: 'interaction',
	category: 'fun',
	description: 'Sends a random daddy jokes!',
	code: `
$interactionReply[;
$cooldown[3s;
{newEmbed: {
	{color: Red}
	{author:❌ Too fast!:$userAvatar[$clientid]}
	{description: 😖 I'm in cooldown! Please wait for **%time%** seconds before executing another one!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
{newEmbed:{
	{color: Random}
	{author: 😂 Random Dad Jokes!:$userAvatar[$authorId]}
	{description: $jsonRequest[https://icanhazdadjoke.com/;joke;\`Unable to load the cat fact at the moment. Something went wrong when trying to request from the server.\`;{"Accept": "application/json"}]}
	{footer: Powered by ZychromeBot (c) 2024}
}}
]
	`
});
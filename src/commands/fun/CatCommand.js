'use strict';

module.exports = ({
	name: 'cat',
	prototype: 'slash',
	type: 'interaction',
	category: 'fun',
	description: 'Sends a random cat picture!',
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
	{author: 😸 Random Cat!:$userAvatar[$authorId]}
	{description: **Fun Meow Fact:** $jsonRequest[https://catfact.ninja/fact;fact;\`Unable to load the cat fact at the moment. Something went wrong when trying to request from the server.\`]}
	{image: $jsonRequest[https://api.thecatapi.com/v1/images/search;[0].url;\`Unable to image load at the moment. Something went wrong when trying to request from the server.\`]}
	{footer: Powered by ZychromeBot (c) 2024}
}}
]
	`
});
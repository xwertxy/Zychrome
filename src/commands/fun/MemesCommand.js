'use strict';

module.exports = ({
	name: 'memes',
	prototype: 'slash',
	type: 'interaction',
	category: 'fun',
	description: 'Sends a random memes!',
	code: `
$interactionReply[;
$cooldown[3s;
{newEmbed: {
	{color: Red}
	{author:❌ Too fast!:$userAvatar[$clientid]}
	{description: 😖 I'm in cooldown! Please wait for **%time%** seconds before executing another one!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$if[$slashOption[nsfw]==]
{newEmbed:{
	{color: Random}
	{author: 🤣 Random Memes!:$userAvatar[$authorId]}
	{title: $jsonRequest[https://meme-api.com/gimme;title;\`Unable to memes at the moment. Something went wrong when trying to request from the server.\`]}
	{image: $jsonRequest[https://meme-api.com/gimme;url;\`Unable to image load at the moment. Something went wrong when trying to request from the server.\`]}
	{footer: Powered by ZychromeBot (c) 2024}
}}
]
	`
});
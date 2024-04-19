'use strict';

module.exports = ({
	name: 'dog',
	prototype: 'slash',
	type: 'interaction',
	category: 'fun',
	description: 'Sends a random dog picture!',
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
	{author: 🐶 Random Dog!:$userAvatar[$authorId]}
	{description: **Fun Woof Fact:** $jsonRequest[https://dogapi.dog/api/facts;facts[0];\`Unable to load the dog fact at the moment. Something went wrong when trying to request from the server.\`]}
	{image: $jsonRequest[https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1;[0].url;\`Unable to image load at the moment. Something went wrong when trying to request from the server.\`]}
	{footer: Powered by ZychromeBot (c) 2024}
}}
]
	`
});
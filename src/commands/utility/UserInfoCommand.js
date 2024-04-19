'use strict';

module.exports = ({
	name: 'userinfo',
	category: 'utility',
	prototype: "slash",
	type: 'interaction',
	description: 'Check user current information!',
	code: `
$interactionReply[;

$cooldown[5s;
{newEmbed: {
	{color: Red}
	{author:❌ Too fast!:$userAvatar[$clientid]}
	{description: 😖 I'm in cooldown! Please wait for **%time%** seconds before executing another one!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

{newEmbed: {
	{color: Random}
	{thumbnail: $userAvatar[$findUser[$slashOption[user]]]}
	{author: $username[$findUser[$slashOption[user]]]$if[$findUser[$slashOption[user]]!==;#$discriminator[$findUser[$slashOption[user]]];]:$userAvatar[$findUser[$slashOption[user]]]}
	{field: **User Status**:This user is currently **$userStatus[$guildId;$findUser[$slashOption[user]]]**.:yes}
	{field: **User ID**:\`$userId[$username[$findUser[$slashOption[user]]]]\`}
	{field: **Profile Username**:$userDisplayName[$findUser[$slashOption[user]]]$if[$findUser[$slashOption[user]]!==;#$discriminator[$findUser[$slashOption[user]]];]:$userAvatar[$findUser[$slashOption[user]]]:yes}
	{field: **User Nickname**:$if[$userNickname[$guildId;$findUser[$slashOption[user]]]==;No Nickname;$userNickname[$guildId;$findUser[$slashOption[user]]]]:yes}
	{field: **Bot?**:
	$if[$isBot[$findUser[$slashOption[user]]]==true;**Is Bot:** ✔ Yes;This member is not a bot.]
	$if[$isBot[$findUser[$slashOption[user]]]==true;**Is Verified?:** $if[$isBotVerified[$findUser[$slashOption[user]]]==true;✔ Yes;❌ No]]
	:yes}
	{field: **User Badges**:\`$if[$userBadges[$findUser[$slashOption[user]]]==none;No Badges;$toUpperCase[$userBadges[$findUser[$slashOption[user]];, ]]]\`}
	{field: **User Roles**:
Total Roles: **$userRolesCount[$findUser[$slashOption[user]]]**
\`\`\`yml
$userRoles[$findUser[$slashOption[user]];$guildId;name;, ]
\`\`\`
	}
	{field: **Member Join Date**:\`$memberJoinDate[$findUser[$slashOption[user]]]\`}
	{field: **User Permissions**: 
\`\`\`yml
$toUpperCase[$userPerms[$findUser[$slashOption[user]];, ]]
\`\`\`
	:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}
]
`
});
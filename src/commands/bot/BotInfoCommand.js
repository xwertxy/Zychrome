'use strict';

modules.exports = ({
	name: 'botinfo',
	prototype: 'slash',
	category: 'bot',
	type: 'interaction',
	description: 'View current bot information!',
	code: `
$interactionReply[;

$cooldown[3s;
{newEmbed: {
	{color: Red}
	{author:❌ Too fast!:$userAvatar[$clientid]}
	{description: 😖 I'm in cooldown! Please wait for **%time%** seconds before executing another one!}
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

{newEmbed: {
	{author: 🤖 Zychrome Info:$userAvatar[$clientid]}
	{color: Blue}
	{field: **Ping Latency**:$if[$ping<50;🟢;$if[$ping<80;🟡;$if[$ping<120;🟠;$if[$ping>200;🔴;$if[$ping>200;🔴]]]]] Current Ping: \`$pingms\`:yes}
	{field: **Node Version**:\`$nodeVersion\`:yes}
	{field: **Bot Version**:\`Zychrome v$packageVersion\`:yes}
	{field: **Current CPU Usage**:$if[$cpu<30;🟢;$if[$cpu<70;🟠;$if[$cpu<100;🔴]]] $cpu%:yes}
	{field: **Bot Uptime**:❤ $uptime:yes}
	{field: **Total Guilds**:🛠 **$guildCount** $if[$guildCount>1;servers;server]:yes}
	{field: **Total Handled Users**:⚙ **$allMembersCount** $if[$allMembersCount>1;users;user]:yes}
	{field: **Bot Owner**:<@$clientOwnerIDs>:yes}
	{footer: Powered by ZychromeBot (c) 2024}
}}

]

`
});
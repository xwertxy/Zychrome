module.exports = ({
	name: 'kick',
	category: 'mods',
	type: "interaction",
	description: 'Kick a member!', 
	prototype: "slash",
	$if: "old",
	code: `
$interactionReply[;
]
`
});
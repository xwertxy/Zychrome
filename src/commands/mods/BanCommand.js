module.exports = ({
	name: 'ban',
	category: 'mods',
	type: "interaction",
	description: 'Ban a member!', 
	prototype: "slash",
	$if: "old",
	code: `
$interactionReply[;
]
`
});
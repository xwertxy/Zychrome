module.exports = ({
	name: 'timeout',
	category: 'mods',
	type: "interaction",
	description: 'Timeout a member!', 
	prototype: "slash",
	$if: "old",
	code: `
$interactionReply[;
]
`
});
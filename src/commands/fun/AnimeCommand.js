'use strict';

module.exports = ({
	name: 'anime',
	category: 'fun',
	type: "interaction",
	description: 'Sends a random anime picture or search one!', 
	prototype: "slash",
	$if: "old",
	code: `
$interactionReply[;
]
`
});
class ClientStatus {
	
	static Init(ZychromeBot) {
		const ConfigGetter = require('../config/ConfigGetter.js');
		
		ZychromeBot.status({
			name: "$guildCount $if[$guildCount>1;servers;server]!",
			type: "WATCHING",
			status: "online",
			time: 60
		});
		
		ZychromeBot.status({
			name: "$allMembersCount $if[$allMembersCount>1;users;user]!",
			type: "LISTENING",
			status: "online",
			time: 60
		});
	}
	
}

module.exports = ClientStatus;
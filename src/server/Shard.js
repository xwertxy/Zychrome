class Shard {
	// Start another instance without any bot panel.
	static StartProcess() {
		const { ClientShard } = require("aoi.js");
		const ConfigGetter = require('../config/ConfigGetter.js');
		if(ConfigGetter.Get().bot.sharding.enable) {
			const ZychromeSharder = new ClientShard("./src/Zychrome.js", {
			  token: ConfigGetter.Get().bot.token,
			  totalShards: ConfigGetter.Get().bot.shards,
			});
			ZychromeSharder.startProcess();
		}
	}
}

module.exports = Shard;
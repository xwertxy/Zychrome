'use strict';

class Panel {
	static Launch(ZychromeBot) {
		const {Panel} = require("@akarui/aoi.panel");
		const ConfigGetter = require('../config/ConfigGetter.js');
		const fs = require('fs');
		
		const ZychromePanel = new Panel({
			port: ConfigGetter.Get().panel.port,
			client: ZychromeBot
		});

		ZychromePanel.loadAPI({
			auth: ConfigGetter.Get().panel.authKey
		});

		ZychromePanel.loadGUI({
			username: ConfigGetter.Get().panel.login.username,
			password: ConfigGetter.Get().panel.login.password,
		});
		
		ZychromePanel.app.get("/home", (req, res) => {
			res.send(fs.readFileSync("./resources/index.html", 'utf8'));
		});
	}
}

module.exports = Panel;
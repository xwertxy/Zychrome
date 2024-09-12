'use strict';

class ConfigGetter {
	static Get() {
		const YAML = require('js-yaml');
		const fs = require('fs');
		
		return YAML.load(fs.readFileSync("./resources/config.yml", 'utf8'));
	}
}

module.exports = ConfigGetter;
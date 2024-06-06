const welcome = require('cli-welcome');

//welcome({title: `Welcome text`, tagLine: `Test`});

welcome({
	title: `Welcome text`,
	tagLine: `Test`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `v1.0`
});
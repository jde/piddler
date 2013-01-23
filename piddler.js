/**
	Simple pid file writer

	Input: process.argv.P - file to write pid to

	return pid || false for failure || null for no arg passed

	v1.0.0

*/

var fs = require('fs');

module.exports = (function (pid, pidFile) {
	
	var pidFile, flagIndex = process.argv.indexOf('-P');

	// use process.pid if no pid is given
	if (typeof pid === "undefined" || pid === null || pid === false) {
		pid = process.pid;
	}

	// if we aren't passed a pid file, check for a command line argument
	if (typeof pidFile === "undefined") {

		// return null if no flag found
		if (flagIndex === -1) {
			return null;
		}

		// expect the file to follow the flag
		pidFile = process.argv[flagIndex + 1];

		// return false if flag present but no file given
		if (typeof pidFile === "undefined") {
			return false;
		}

	}

	// write the file and return pid on success
	if (fs.writeFileSync(pidFile, pid)) {
		return pid;
	}

	// return false on failure
	return false;

}());
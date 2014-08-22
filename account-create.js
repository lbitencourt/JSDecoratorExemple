'use strict';

var account_repository = require('./account-repository');

function onCallback(err, data, callback) {
	if (callback) {
		callback(err, data);
	}
}

module.exports.execute = function(account, callback) {
	var err;

	if (account.name === undefined) {
		err = {
			message: 'name is required.'
		};
		onCallback(err, null, callback);
	} else {
		account_repository.add(account, function(err, data) {
			onCallback(err, data, callback);
		});
	}
};
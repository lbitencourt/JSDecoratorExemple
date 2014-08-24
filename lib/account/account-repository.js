'use strict';
var notify_service = require('./account-notify');

var accounts = [];

function onCallback(err, data, callback) {
	if (callback) {
		callback(err, data);
	}
}

module.exports.delete_all = function(callback) {
	accounts = [];
	onCallback(null, null, callback);
};

module.exports.add = function(account, callback) {
	var err;
        
	notify_service.decorator(account);
        account.before_create(account);
	account.id = accounts.length + 1;
	accounts.push(account);
        account.after_create(account);
	onCallback(err, account, callback);
};

module.exports.update = function(account, callback) {
	var err;
	onCallback(err, account, callback);
};

module.exports.count = function() {
	return accounts.length;
};

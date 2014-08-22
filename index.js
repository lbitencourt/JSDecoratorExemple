'use strict';
var account_service = require('./account-service');

var account = {
	name : 'leandro',
	email: 'bitcourt@gmail.com'
};

account_service.create_account(account);
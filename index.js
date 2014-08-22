'use strict';
var account_service = require('./lib/account');

var account = {
	name : 'leandro',
	email: 'bitcourt@gmail.com'
};

account_service.create.execute(account);

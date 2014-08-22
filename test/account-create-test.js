'use strict';

var should = require('should');
var account_create = require('../account-create')

describe('Create account', function() {

	it('Should be create account', function(done) {
		var account = {
			name: 'Leandro',
			email: 'bitcourt@gmail.com'
		};
		account_create.execute(account, function(err, data) {
			if (err) {
				throw err;
			}
			data.should.have.property('name', 'Leandro');
			data.should.have.property('email', 'bitcourt@gmail.com')
			done();
		});
	});

	it('Should not be create account without required fields', function(done) {
		var account = {};
		account_create.execute(account, function(err) {
			err.should.have.property('message', 'name is required.');
			done();
		});
	});
});
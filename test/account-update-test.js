'use strict';

var should = require('should');
var account_update = require('../account-update');
var account_create = require('../account-create');

describe('Account update', function() {
	var account;

	beforeEach(function(done) {
		var new_account = {
			name: 'fulano',
			email: 'fulano@gmail.com'
		};

		account_create.execute(new_account, function(err, data) {
			account = data;
			done();
		});
	});

	it('Should be update Account', function(done) {
		account.name = 'ciclano';
		account.email = 'ciclano@gmail.com';

		account_update.execute(account, function(err, data) {
			if (err) {
				throw err;
			}

			data.id.should.be.equal(account.id);
			data.should.have.property('name', 'ciclano');
			data.should.have.property('email', 'ciclano@gmail.com');
			done();
		});

	});
});
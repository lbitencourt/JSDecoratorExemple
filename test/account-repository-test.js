'use strict'

var should = require('should');
var account_repository = require('../account-repository');


describe('Account repository', function() {
	var account;

	beforeEach(function(done) {
		account = {
			name: 'fulano',
			email: 'fulano@gmail.com'
		};
		account_repository.delete_all();
		done();
	});


	it('Add account', function(done) {
		account_repository.add(account, function(err, account_created) {
			account_created.should.have.property('id');
			account_created.should.have.property('name', 'fulano');
			account_created.should.have.property('email', 'fulano@gmail.com');
		});

		account_repository.count().should.equal(1);
		done();
	});

	it('Update account', function(done) {
		account_repository.add(account, function(err, account_created) {
			if (err) {
				throw err;
			}

			account_created.name = 'ciclano';
			account_created.email = 'ciclano@gmail.com';

			account_repository.update(account_created, function(err, account_updated) {
				if (err) {
					throw err;
				}
				account_updated.id.should.equal(account_created.id);
				account_updated.should.be.property('name', 'ciclano');
				account_updated.should.be.property('email', 'ciclano@gmail.com');
				done();
			});
		});
	});
});
'use strict';

var userNotify = {
		notify: function(event, item, next) {
			console.log('***********************************');
			console.log('Event: ' + event);
			console.log('Item.name: ' + item.name);
			console.log('***********************************');
		},

		decorator: function(model) {
			model.afterCreate = function(item, next) {
				if (next) {
					next(null, item);
				}
				userNotify.notify('user.create', item);
			};
			model.afterUpdate = function(item, next) {
				if (next) {
					next(null, item);
				}
				userNotify.notify('user.update', item);
			};
		}
	},
	userService = {
		createUser: function(model) {
			console.log('User created: ' + model);
			if (model.afterCreate) {
				model.afterCreate(model);
			}
		},
		updateUser: function(model) {
			console.log('User updated: ' + model);
			if (model.afterUpdate) {
				model.afterUpdate(model);
			}
		}
	};


var user = {};
userNotify.decorator(user);

user.name = 'Leandro';
userService.createUser(user);


user.name = 'Fulando da silva';

userService.updateUser(user);
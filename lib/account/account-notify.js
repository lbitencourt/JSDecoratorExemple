'use strict';

var account_decorator = {

  notify: function(event, data) {
    console.log('******************************************');
    console.log('event: ' + event);
    console.log('account.name: ' + data.name);
    console.log('account.email: ' + data.email);
    console.log('******************************************');    
  },

  decorator: function(account) {
     account.before_create = function(callback){
        account_decorator.notify('account.before_create', account);
     },
     account.before_update = function(callback){
        account_decorator.notify('account.before_update', account);
     },
     account.after_create = function(callback){
        account_decorator.notify('account.after_create', account);
     },
     account.after_update = function(callback){
        account_decorator.notify('account.after_update', account);
     }
  }
};

module.exports = account_decorator;

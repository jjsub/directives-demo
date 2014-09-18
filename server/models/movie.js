'use strict';

//var bcrypt = require('bcrypt'),
  //  Mongo  = require('mongodb');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

module.exports = User;


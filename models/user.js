/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date: 09 November 2020
; Modified By: Arlix Sorto
; Description: API Gateway
;===========================================
*/

var mongoose = require('mongoose');

/** User schema**/
var userSchema = new mongoose.Schema({
 username: String,
 password: String,
 email: String
});
var User = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);

module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = { _id: id};

    User.findById(query,callback);
};

module.exports.getOne = (e, callback) => {
    var query = { email: e};

    User.findOne(query,callback);
};

/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date: 09 November 2020
; Modified By: Arlix Sorto
; Description: API Gateway
;===========================================
*/
var config = {};
config.web = {};
config.web.port = process.env.PORT || "3000";
config.web.secret = 'topsecret';
module.exports = config;
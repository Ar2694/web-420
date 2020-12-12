/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date: 09 November 2020
; Modified By: Arlix Sorto
; Description: API Gateway II
;===========================================
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

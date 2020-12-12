/*
============================================
; Title:  api-catalog.js
; Author: Professor Krasso
; Date: 09 November 2020
; Modified By: Arlix Sorto
; Description: API Gateway II
;===========================================
*/

/**** API Routes****/
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
var checkToken = require('../check-token');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token',checkToken, auth_controller.user_token);

// POST request for logging in
router.post('/auth/login', auth_controller.user_login);

// GET request for logging out
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;



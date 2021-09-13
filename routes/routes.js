'use strict'

var express = require('express');

// Controllers

var WeatherController = require('../controllers/controller_weather');

var router = express.Router();

// Routes

	// Weather
		router.get('/location/all', WeatherController.getContinents);
		router.get('/location/:id', WeatherController.getData);

module.exports = router;
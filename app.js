var express = require('express');
var app = express();
var sequelize = require('./db/db');

var ProductController = require('./controllers/ProductController');

app.use('/products', ProductController);

module.exports = app;
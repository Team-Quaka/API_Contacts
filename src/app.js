const express = require('express');
const app = express();
const router = require('./router');
// require('./model');
// Add Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);



module.exports = app;
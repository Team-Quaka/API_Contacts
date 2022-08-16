const express = require('express');
const app = express();
const router = require('./router');
// Add Middelware
app.use(express.json());
app.use(express.urlencoded());
app.use(router);



module.exports = app;
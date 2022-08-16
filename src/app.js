const express = require('express');
const app = express();
const router = require('./router');
// Add Middelware
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

app.get('/health', (req, res) => res.status(200).send('Server is Up!'));

module.exports = app;
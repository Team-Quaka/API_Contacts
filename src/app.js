const express = require('express');
const app = express();
// Add Middelware
app.use(express.json());
app.use(express.urlencoded());
app.get('/health', (req, res) => res.status(200).send('Server is Up!'));


module.exports = app;
const express = require('express');
const loginRouter = express.Router();


loginRouter.post('/login', async (req, res) => {
    res.status(200);
    res.send();
})

loginRouter.post('/signup', async (req, res) => {
    res.status(200);
    res.send();
})

const express = require('express');
const loginRouter = express.Router();


loginRouter.post('/login', async (req, res) => {
    return res.status(200).json();
})

loginRouter.post('/signup', async (req, res) => {
    return res.status(200).json();
})


module.exports = loginRouter
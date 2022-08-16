const express = require('express');
const contactRouter = express.Router();


contactRouter.post('/add-contact', async (req, res) => {
    return res.status(200).json();
});

contactRouter.get('/get-contacts', async (req, res) => {
    return res.status(200).json();
});

contactRouter.put('/edit-contact', async (req, res) => {
    return res.status(200).json();

});

module.exports = contactRouter;
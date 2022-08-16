const express = require('express');
const contactRouter = express.Router();


contactRouter.post('add-contact', async (req, res) => {
    res.status(200);
    res.send();    
})

contactRouter.get('get-contacts', () => {
    res.status(200);
    res.send();
})

contactRouter.put('edit-contact', (req, res) => {
    res.status(200);
    res.send();
})
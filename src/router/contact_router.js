const express = require('express');
const contactRouter = express.Router();


contactRouter.post('/add-contact', async (req, res) => {
    return res.status(200).json();
});

contactRouter.get('/get-contacts', async (req, res) => {
    return res.status(200).json({ 'contacts': [{ 'firstname': 'reza', 'lastname': 'mous', 'phonenumber': '09109947180' }, { 'firstname': 'reza', 'lastname': 'mous', 'phonenumber': '09109947180' }, { 'firstname': 'reza', 'lastname': 'mous', 'phonenumber': '09109947180' }, { 'firstname': 'reza', 'lastname': 'mous', 'phonenumber': '09109947180' }], 'page': 1 });
});

contactRouter.put('/edit-contact', async (req, res) => {
    return res.status(200).json();

});

module.exports = contactRouter;
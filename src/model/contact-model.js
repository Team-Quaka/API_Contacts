const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    
    firstname: {
        type: String,
        require: true
    },

    lastname: {
        type: String,
    },

    phone: {
        type: String,
        require: true
    }
})


const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

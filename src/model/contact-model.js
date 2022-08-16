const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = Schema({

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
}, {
    autoCreate: true,
    autoIndex: true,
    timestamps: true,
});


const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

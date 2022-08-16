const mongoose = require('mongoose'); 


const userSchema = mongoose.Schema({
    
    email: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
        minlength: 6
    },
    
    firstname: {
        type: String,
    },

    lastname: {
        type: String,
    },

    contacts: [{ type: Schema.Types.ObjectId, ref: 'Contact' }],

    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
})


const User = mongoose.model("User", userSchema);

module.exports = User;
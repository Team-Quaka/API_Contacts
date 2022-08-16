const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const userSchema = new Schema({

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
}, {
    autoCreate: true,
    autoIndex: true,
    timestamps: true,
});


userSchema.pre("save", async function (next) {
    const user = this;
    console.log("this save pre", user);
    if (this.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
        user.re_password = user.password;
    }

    next();
});

// generate auth token
userSchema.methods.genrateAuth = async function () {
    const user = this;
    const token = await jwt.sign({
        _id: user._id.toString()
    }, constants.jwtSecret);

    user.tokens = user.tokens.concat({
        token
    });
    await user.save();
    return token;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
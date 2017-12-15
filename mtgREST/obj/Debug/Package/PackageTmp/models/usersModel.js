'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    username: {
        type: String,
        required: 'Username'
    },
    password: {
        type: String,
        required: 'Password'
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: "E-Mail Address"
    },
    phone_num: {
        type: String,
        required: "Telephone Num."
    }
});

module.exports = mongoose.model('Users', UserSchema);

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
        required: "E-Mail Address",
        unique: true
    },
    phone_num: {
        type: String,
        required: "Telephone Num.",
        unique: true
    },
    user_type: {
        type: [{
            type: String,
            enum: ['tourist', 'placeowner', 'goverment']
        }],
        default: ['tourist']
    },
    own_locations: [{
        location_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Locations'
        }
    }]
});


module.exports = mongoose.model('Users', UserSchema);

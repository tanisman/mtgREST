'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
    name: {
        type: String,
        required: "Place Name"
    },
    added_date: {
        type: Date,
        default: Date.now
    },
    address: {
        type: String,
        required: "Place Address"
    },
    phone_num: {
        type: String,
        required: "Telephone Num."
    },
    description: {
        type: String,
        required: "Description about place",
        default: "No Description"
    },
    trk: [{
        lat: String,
        lng: String
    }]
});


module.exports = mongoose.model('Locations', LocationSchema);

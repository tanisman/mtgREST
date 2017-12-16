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
    has_wc: {
        type: Boolean,
        required: "WC info",
        default: false
    },
    has_wifi: {
        type: Boolean,
        required: "wifi info",
        default: false
    },
    attraction_points: {
        type: Number,
        default: 0,
    },
    comments: [{
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        text: {
            type: String,
            default: ""
        }
    }],
    trk: [{
        lat: String,
        lng: String
    }]
});


module.exports = mongoose.model('Locations', LocationSchema);

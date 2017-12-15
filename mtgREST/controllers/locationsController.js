'use strict';
var mongoose = require('mongoose'),
    Location = mongoose.model('Locations'),
    User = mongoose.model('Users');

exports.list_all_locations = function (req, res) {
    Location.find({}, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};

exports.create_a_location = function (req, res) {
    var new_location = new Location(req.body);
    User.findById(req.session.userId, function (err, user) {
        if (!err) {
            if (user.own_locations) {
                user.own_locations.push({ location_id: new_location._id });
            } else {
                user.own_locations = [{ location_id: new_location._id }];
            }
            user.save();
        }
    });
    new_location.save(function (err, user) {
        if (err) {
            res.send(err);
        } else {
            
            res.json(user);
        }
    });
};

exports.read_a_location = function (req, res) {
    Location.findById(req.params.locationId, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
};
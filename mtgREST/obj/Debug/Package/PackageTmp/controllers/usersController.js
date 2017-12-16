'use strict';
var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.list_all_users = function (req, res) {
    User.find({}, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    }).populate('own_locations.location_id');
};

exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};

exports.read_a_user = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    }).populate('own_locations.location_id');
};

exports.login_required = function (req, res, next) {
    if (req.session && req.session.userId && req.session.userId != 0) {
        return next();
    } else {
        var err = new Error('You must be logged in to view this page.');
        err.status = 401;
        return next(err);
    }
}
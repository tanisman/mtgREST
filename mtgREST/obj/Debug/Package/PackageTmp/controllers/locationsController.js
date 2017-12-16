'use strict';
var mongoose = require('mongoose'),
    Location = mongoose.model('Locations'),
    User = mongoose.model('Users');


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}


exports.list_all_locations = function (req, res) {
    Location.find({}, function (err, loc) {
        if (err) {
            res.send(err);
        } else {
            res.json(loc);
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
    new_location.save(function (err, loc) {
        if (err) {
            res.send(err);
        } else {
            
            res.json(loc);
        }
    });
};

exports.read_a_location = function (req, res) {
    Location.findById(req.params.locationId, function (err, loc) {
        if (err) {
            res.send(err);
        } else {
            res.json(loc);
        }
    })
};

exports.find_nearby = function (req, res) {
    Location.find({}, function (err, loc) {
        if (err) {
            res.send(err);
        } else {
            var found = [];
            for (var i = 0; i < loc.length; i++) {
                for (var j = 0; j < loc[i].trk.length; j++) {
                    var distance = getDistanceFromLatLonInKm(parseFloat(req.params.lat), parseFloat(req.params.lng), parseFloat(loc[i].trk[j].lat), parseFloat(loc[i].trk[j].lng));
                    if (distance < 2) {
                        found.push({ location: loc[i], lat: loc[i].trk[j].lat, lng: loc[i].trk[j].lng, distance_in_mt: parseInt(distance * 1000) });
                    }
                }
            }
            res.json(found);
        }
    });
}
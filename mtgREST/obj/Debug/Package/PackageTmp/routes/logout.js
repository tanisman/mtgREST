var express = require('express');
var mongoose = require('mongoose'),
    User = mongoose.model('Users');

var router = express.Router();

router.post('/', function (req, res) {
    if (req.session && req.session.userId) {
        req.session.destroy(function (err) {
            if (err) {
                res.json({ success: 0, msg: err });
            } else {
                res.json({ success: 1, msg: "" });
            }
        });
    } else {
        res.json({ success: 0, msg: "not logged in" });
    }
});

module.exports = router;

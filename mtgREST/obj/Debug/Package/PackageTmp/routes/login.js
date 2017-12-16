var express = require('express');
var mongoose = require('mongoose'),
    User = mongoose.model('Users');

var router = express.Router();

router.post('/', function (req, res) {
    if (req.session && req.session.userId && req.session.userId != 0) {
        res.json({ success: 0, msg: "already logged in" });
    } else {
        User.findOne({ username: req.body.username, password: req.body.password },
            function (err, user) {
                if (err) {
                    res.json({ success: 0, msg: err });
                } else {
                    if (user != null) {
                        req.session.userId = user._id;
                        res.json({ success: 1, msg: "" });
                    } else {
                        res.json({ success: 0, msg: "invalid username or password" });
                    }
                }
            });
    }
});

module.exports = router;

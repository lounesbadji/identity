"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var userModel_1 = require("../models/userModel");
function register(req, res) {
    var newUser = new userModel_1.User(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save(function (err, user) {
        if (err) {
            return res.status(400).send({
                message: err
            });
        }
        else {
            user.hash_password = undefined;
            return res.json(user);
        }
    });
}
exports.register = register;
function login(req, res) {
    userModel_1.User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err)
            throw err;
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
    });
}
exports.login = login;
function loginRequired(req, res, next) {
    if (req.user) {
        next();
    }
    else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
}
exports.loginRequired = loginRequired;
//# sourceMappingURL=userController.js.map
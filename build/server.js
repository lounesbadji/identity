"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var jsonwebtoken = require("jsonwebtoken");
var authRoutes_1 = require("./api/routes/authRoutes");
var app = express();
var port = 3000;
mongoose.connect('mongodb://localhost/Tododb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
            if (err)
                req.user = undefined;
            req.user = decode;
            next();
        });
    }
    else {
        req.user = undefined;
        next();
    }
});
authRoutes_1.auth(app);
app.use(function (req, res) { return res.status(404).send({ url: req.originalUrl + ' not found' }); });
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
//# sourceMappingURL=server.js.map
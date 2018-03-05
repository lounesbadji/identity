import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as jsonwebtoken from 'jsonwebtoken';
import {auth} from "./api/routes/authRoutes";

var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();

  }
});

auth(app);

app.use((req, res) => res.status(404).send({ url: req.originalUrl + ' not found' }) );

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

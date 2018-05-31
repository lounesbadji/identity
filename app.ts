import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as jsonwebtoken from 'jsonwebtoken';
import {auth} from "./api/routes/authRoutes";

export const app = express();
import './db';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
}, cors({ origin: 'http://dev.ubilab.io:4200', optionsSuccessStatus: 200}));

auth(app);

app.use((req, res) => res.status(404).send({ url: req.originalUrl + ' not found' }) );

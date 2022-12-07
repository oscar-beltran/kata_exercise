import http from 'http';
import express from 'express'
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import { applicationRouter } from './routes/application.router';

const NAMESPACE = 'Server';
const app = express();
app.disable('etag'); // Disable etag headers on responses

app.use((req: Request, res: Response, next) => {
    res.on('finish', () => {
        //console.log(req);
        logging.info(NAMESPACE, `[${req.method}] - ${req.originalUrl}, STATUS - [${res.statusCode}]`);
    });

    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }

    next();
});

app.use(applicationRouter);

const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => {
    console.info('--------------------------------------------------------------------------------');
    logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`);
    console.info('--------------------------------------------------------------------------------');
});

export { app };

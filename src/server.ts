import routes from './routes/routes';

import express, { Express } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

export default app;
import App from './app';

import * as express from 'express';

import path from 'path';
import mongoose from 'mongoose';

import { loggerMiddleware } from './middlewares/logger';
import CourseController from './controllers/CourseController';

const app = new App();

/**
 * Configuration Keys
 */
const keys = require('./config/keys');

/**
 * Models
 */
require('./models/Course');

/**
 * Database Connection
 */
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to database...'))
  .catch((error) => console.log(error));

const PORT = parseInt(process.env.PORT) || 5000;

app.listen(PORT);

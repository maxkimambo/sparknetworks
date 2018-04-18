const express = require('express');
const log = require('../utils/logger');
const context = require('../utils/context');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
// cors 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const publicFolder = path.join(`${__dirname}./../public/`);

app.use(express.static(publicFolder));

const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(context);

log.info('Setting up routes.....');
routes.setup(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const ctx = req.app_context;
  log.warn(`URL Not found: ${req.url}`, ctx);
  res.status(404).send('Not found');
  const err = new Error('Not found');
  err.status = 404;
  err.message = 'Url not found';
  next(err);
});

// error handler
app.use((err, req, res) => {
  const env = req.app.get('env');
  if (env === 'development') {
    res.status(err.status || 500);
    res.send(`error${err.message}`);
  }
  log.err(err);
});

module.exports = app;
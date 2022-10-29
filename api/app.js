const createError = require('http-errors');
const express = require("express");
const logger = require("morgan");

const app = express();

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.set("Access-Control-Allow-Headers", "content-type");
  res.set("Access-Control-Allow-Methods", "*");
  res.set("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
app.use(logger('dev'));

const routes = require("./config/routes.config");
app.use('/api/v1', routes);

app.use((req, res, next) => next(createError(404, "Page not found")));

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`Marc Cuesta's technical challenge is listening at port ${port}`)
);

module.exports = app;
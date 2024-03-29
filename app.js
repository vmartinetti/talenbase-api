var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const bodyParser = require("body-parser");

const solicitudesRouter = require("./routes/solicitudes");
const candidatosRouter = require("./routes/candidatos");
const departamentosRouter = require("./routes/departamentos");
const authRouter = require("./routes/auth");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', () => {
//   res.render('index', { title: 'Welcome to the talenbase API' });
// });
app.use("/solicitudes", solicitudesRouter);
app.use("/candidatos", candidatosRouter);
app.use("/departamentos", departamentosRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('error 404');
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;

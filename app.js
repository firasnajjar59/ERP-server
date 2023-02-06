const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(mongoSanitize());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/v1', apiRouter);
app.all('*', (req, res, next) => {
    next(`Cant find ${req.originalUrl} on this server`);
  });
// global error handler
app.use((err,req,res,next)=>{
    res.status(400).json(err)
});

module.exports = app;

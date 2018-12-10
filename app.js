var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup

app.get('/', (req, res) => {
    pool.query('SELECT * FROM probaTable', (error, results, fields) => {
        if (error) res.send(error);

        res.send(results);
    });
});

app.use('/users', usersRouter);

var pool = mysql.createPool({
    connectionLimit: 20,
    host: '46.29.163.22',
    user: 'vpm',
    password: '001992',
    database: 'probaDB'
});

app.listen('4000', () => {
    console.log('Server listening on PORT 4000');
});

const express = require('express');

const app = express()

app.use('/api', require('./routes/api'));

module.exports = app;
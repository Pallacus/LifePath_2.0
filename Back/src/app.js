const express = require('express');

const app = express()

app.use('/register', require('./routes/register'))
app.use('/login', require('./routes/login'))
app.use('/personal_data', require('./routes/personal_data'))
app.use('/experience', require('./routes/experience'))
app.use('/training', require('./routes/training'))
app.use('/projects', require('./routes/projects'))
app.use('/resume', require('./routes/resume'))

module.exports = app;
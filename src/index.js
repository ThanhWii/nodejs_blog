const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

// Import Route
const route = require('./routes/index');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template enginer
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// Routes init
route(app);

app.listen(port, () => { console.log(`Example app listening on port ${port}`) });
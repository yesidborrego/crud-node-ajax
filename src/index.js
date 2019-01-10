const path = require('path');
const express = require('express');
const morgan = require('morgan');

// setting Server
const app = express();
const routes = require('./routes/routes');
app.set('port', process.env.PORT || 3000); // Configuration port
app.use(express.static(path.join(__dirname, 'public'))); // Static files

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/', routes);

// Listening server
app.listen(app.get('port'), () => {
  console.log(`Server on localhost:${app.get('port')}`);
});

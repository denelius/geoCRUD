const express = require('express');
const bodyParser = require('body-parser');
const geo = require('./routes/geo.route'); // Imports routes for the products

// initialize the express app
const app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://denelius:mlab_b00gingrip@ds149606.mlab.com:49606/geotutorial", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/geo', geo);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
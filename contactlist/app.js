//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var Promise = require('bluebird');

var app = express();

var mongoDB = 'mongodb://LUKECHEESEMAN:Orang3isr3d123@ds157500.mlab.com:57500/contactlist';
mongoose.connect(mongoDB, {
    useMongoClient: true
});

const route = require('./routes/route');

//connect to mongoDB
mongoose.Promise = require('bluebird');
var mongodb = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//on connection 
mongoose.Promise = require('bluebird');
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb @ 27017');
});

//error
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error in database connection' + err);
    }
});

//port no

const port = 3000;

//adding middle ware - cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//testing server
app.get('/', (req, res) => {
    res.send('foobar')
});

app.listen(port, () => {
    console.log('server started at port' + port);
});
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

var express = require('express');
var fs = require('fs');
var path = require('path');
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.get('/api/notes', function(req, res) {
    //__dirname is the absolute path to this file. path.join join each element to create a new filepath
    // res.sendFile transfers the file at the given path and it sets the Content-Type response HTTP header field based on the filename extension. In this case .json
    res.sendFile(path.join(__dirname, '/db/db.json'));
})



// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});


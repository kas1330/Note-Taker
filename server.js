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
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


//returns the file as json
//req is an object containing information about the HTTP request that raised the event
// you use res to send back the desired HTTP response
// app.get('/api/notes', function(req, res) {
//     //__dirname is the absolute path to this file. path.join join each element to create a new filepath
//     // res.sendFile transfers the file at the given path and it sets the Content-Type response HTTP header field based on the filename extension. In this case .json
//     //saving as json
//     // res.sendFile(path.join(__dirname, '/db/db.json'));
// });

// app.post('/api/notes', function(req,res){
//     //parse the json file
//     var saved = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
//     // req.body property contains key-value pairs of data submitted in the request body
//     var newNote = req.body;
//     //use the length of the object as the id
//     var nId = (saved.length).toString();
//     //set the new id
//     newNote.id = nId;
//     //push the newest note
//     saved.push(newNote);
//     //writes to file or creates a new file if the file doesn't already exist
//     fs.writeFileSync('./db/db.json', JSON.stringify(saved));
//     console.log('Notes saved: ', newNote);
//     //sends a json response, saved is sent as the body of the response
//     res.json(saved);

// })




// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});


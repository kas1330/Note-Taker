
var fs = require('fs');
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

  app.get("/api/notes", function(req, res) {
    //read the json data and returns it
    res.sendFile(path.join(__dirname, './db.json'));
    console.log('Path: ',__dirname, './db.json');

    console.log('Get works');
  });

  app.post('/api/notes', function(req,res){
    console.log('In the POST method');
    //parse the json file
    var saved = JSON.parse(fs.readFileSync('./routes/db.json', 'utf-8'));
    console.log('POST method: ', saved);
    // req.body property contains key-value pairs of data submitted in the request body
    var newNote = req.body;
    //use the length of the object as the id
    var nId = (saved.length).toString();
    // console.log()
    //set the new id
    newNote.id = nId;
    //push the newest note
    saved.push(newNote);
    //writes to file or creates a new file if the file doesn't already exist
    fs.writeFileSync('./routes/db.json', JSON.stringify(saved));
    console.log('Notes saved: ', newNote);
    //sends a json response, saved is sent as the body of the response
    res.json(saved);

});

app.delete('/api/notes', function(req,res){

});




}

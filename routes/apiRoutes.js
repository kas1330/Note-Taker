// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

  app.get("/api/notes", function(req, res) {
    //read the json data and return it
    res.sendFile(path.join(__dirname, '/db/db.json'));
  });

  app.post('/api/notes', function(req,res){
    //parse the json file
    var saved = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    // req.body property contains key-value pairs of data submitted in the request body
    var newNote = req.body;
    //use the length of the object as the id
    var nId = (saved.length).toString();
    //set the new id
    newNote.id = nId;
    //push the newest note
    saved.push(newNote);
    //writes to file or creates a new file if the file doesn't already exist
    fs.writeFileSync('./db/db.json', JSON.stringify(saved));
    console.log('Notes saved: ', newNote);
    //sends a json response, saved is sent as the body of the response
    res.json(saved);

});

app.delete('/api/notes', function(req,res){

});

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------



}

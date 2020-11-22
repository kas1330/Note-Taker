
var fs = require('fs');
var path = require("path");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    //read the json data and returns it
    res.sendFile(path.join(__dirname, './db.json'));
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

  app.delete('/api/notes/:id', function(req,res){
    //parse JSON
    var saved = JSON.parse(fs.readFileSync('./routes/db.json', 'utf-8'));
    //get the id of the note to be deleted
    var noteId = req.params.id;
    //keep track of the new id nums
    var newNum = 0;
    //Filter out everything not equal to the id of the note to be deleted, save all into new 'saved' var
    saved = saved.filter(currentNote => {
      return currentNote.id != noteId;
    })

    //Re number the id's of the notes left after one was deleted.
    for(currentNote of saved){
      currentNote.id = newNum.toString();
      newNum++;
      console.log('Current Note: ',currentNote);
    }
    //convert response to string and send it
    fs.writeFileSync('./routes/db.json', JSON.stringify(saved));
    res.json(saved);
  });


}

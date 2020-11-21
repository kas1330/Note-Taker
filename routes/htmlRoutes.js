// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ROUTING

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.

//   app.get("/index", function(req, res) {
//     res.sendFile(path.join(__dirname, "../assets/index.html"));
//   });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};

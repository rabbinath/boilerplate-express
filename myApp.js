var express = require('express');
var app = express();
//console.log("Hello World");
absolutePath = __dirname + "/views/index.html";
app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(absolutePath));

// Start the Express server
//app.listen(3000, () => console.log('Server running on port 3000!'))





































 module.exports = app;

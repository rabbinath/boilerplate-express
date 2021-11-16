var express = require('express');
var app = express();
var dotenv=require("dotenv").config();
//console.log("Hello World");
absolutePath = __dirname + "/views/index.html";
pubPath=__dirname + "/public";
app.use("/public",express.static(pubPath));
app.get("/", (req, res) => res.sendFile(absolutePath));
app.get("/json",(req, res) => {

    if (process.env.MESSAGE_STYLE==="uppercase")
    {
        res.json({ message: "HELLO JSON"});
    }
    else
    {
        res.json({ message: "Hello json"});
    }

});
// Start the Express server
//app.listen(3000, () => console.log('Server running on port 3000!'))





































 module.exports = app;

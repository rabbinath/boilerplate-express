var express = require('express');
var app = express();
var dotenv=require("dotenv").config();
var bodyparser=require("body-parser");
//console.log("Hello World");
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())
absolutePath = __dirname + "/views/index.html";
pubPath=__dirname + "/public";
app.use("/public",express.static(pubPath));
app.use((req,res,next) => { 
    console.log(req.method+" "+req.path+" - "+req.ip);
    
  next();
});


app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    
    next();},
    
        (req,res) => {
            res.json({time: req.time})
        }
);



app.get("/:word/echo", (req, res) => {
    var pword=req.params.word;
    res.json({echo: pword});
    }
);

app.post("/name", (req, res) => {
    
  var string1 = req.body.first+ " " + req.body.last;
  res.json({ name: string1 });
 //res.json({ name: req.body.string });
    }
);
app.get("/name", (req, res) => {
    var firstName=req.query.first;
    var lastName=req.query.last;
  //  res.json({ name: req.body.first });    
    res.json({ name: firstName +" " + lastName });
   // console.log("Using Body-parser: ", req.body.first)
    }
);

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

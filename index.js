
var express = require("express");
var empRoutes=require("./routes/server");
var app=express();

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});





app.use(express.json());
app.use("/employees",empRoutes);

app.listen(4000, function(){
    console.log("Server Started on port  " + 4000 );
})


const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
 res.sendFile(__dirname + "/index.html")
});

app.post("/",function(req,res){

var time = Number(req.body.time);
var p = Number(req.body.p);
var rate = Number(req.body.rate);

var SI = (time*p*rate)/100;

res.send("The simple-interest of it is "+SI);

});

app.listen(3000, function(){
  console.log("running")
});

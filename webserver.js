var express = require("express");
var app     = express();
var path    = require("path");

var soso = 6;
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.get('/ea-path',function(req,res){

    console.log( req.query.toto);
    
    res.render('web_ea.html',{title:req.query.toto});
});


app.listen(3000);

console.log("Running at Port 3000");
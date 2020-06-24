var express = require("express");
var path = require("path");
var mongo = require("mongoose");
var bodyparser = require("body-parser");
const { version } = require("os");

var db = mongo.connect("mongodb://localhost:27017/academy",function(err,response){
    if(err){console.log(err);}
    else{console.log("connect to "+db , " + "+response);}

});

var app = express();
app.use(bodyparser());
app.use(bodyparser.json({limit:'5mb'}));
app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','x-requested-with,Content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});
var Schema = mongo.Schema;
var BooksSchema = new Schema({
    name:{ type: String },
    adresse : { type : String },

},{versionKey : true} )
var model = mongo.model('books',BooksSchema,'books');


app.post('/api/savebook',function(req,res){
    var mod = new model(req.body);
    mod.save(function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"livre ajoutee avec succes .. !"})
        }

    });
})


app.listen(8080,function(){
    console.log("Example app listening on port 8080 ");
})
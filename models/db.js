var mongo = require("mongoose");
var db = mongo.connect("mongodb://localhost:27017/academy",function(err,response){
    if(err){console.log(err);}
    else{console.log("connect to "+db , " + "+response);}

});

require("./user.model");
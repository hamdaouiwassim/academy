var mongo = require("mongoose");
var db = mongo.connect("mongodb://localhost:27017/academy",function(err,response){
    if(err){console.log(err);}
    else{console.log("connect to "+db , " + "+response);}

});

require("./user.model");
require("./quiz.model");
require("./response.model");
require("./reservationbook.model");
require("./reservationevent.model");
require("./listeattentebook.model");
require("./listeattenteevent.model");
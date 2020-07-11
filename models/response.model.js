// Quiz Modele
var mongo = require("mongoose");
const ResponsesSchema = new mongo.Schema({
    idquiz:{ type: String },
    response : { type : String },
    state : { type : Boolean }
   
   

});

mongo.model('Response',ResponsesSchema,'responses');
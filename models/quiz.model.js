// Quiz Modele
var mongo = require("mongoose");
const quizsSchema = new mongo.Schema({
    idcour:{ type: String },
    question : { type : String }
   
   

});

mongo.model('Quiz',quizsSchema,'quizs');

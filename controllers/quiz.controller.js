const mongo = require("mongoose");
//var modelBook = mongo.model('books',BooksSchema,'books');
//const Quiz = mongo.model('Quiz',quizsSchema,'quizs');
const Quiz = mongo.model('Quiz');


module.exports.addQuiz = (req,res,next)=>{
    var quiz = new Quiz();
    quiz.idcour = req.body.idcour;
    quiz.question = req.body.question;
    quiz.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Quiz ajoutee avec succes .. !"})
            }
            
    })


}

module.exports.allquiz = (req,res,next)=>{
    //var quiz = new Quiz();
    //idcour = req.body.idcour;
    Quiz.find({idcour:'5f02e3a8b5fe872824448e56'},function(err,data){
        
            if(err){
               
                res.send(err);
            }
            else{
                res.send(data);
            }
            
    })




  
}


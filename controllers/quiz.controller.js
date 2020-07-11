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
    idcour = req.body.idcour;
    Quiz.find({idcour:idcour},function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
  
}


module.exports.updateQuiz = (req,res,next)=>{
    //var quiz = new Quiz();
    //idcour = req.body.idcour;
    //Quiz.find({idcour:'5f02e3a8b5fe872824448e56'},function(err,data){
        Quiz.findByIdAndUpdate(req.body._id,{ question : req.body.question },function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send({data: "Quiz modifiee avec success"});
            }
            
    })

  
}

module.exports.deleteQuiz = (req,res,next)=>{
    Quiz.remove({_id:req.body.id},function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Quiz supprimee .. !"})
        }
    })

}
module.exports.allcoursquiz = (req,res,next)=>{
    idcour = req.query.id;
    Quiz.find({idcour:idcour},function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
}


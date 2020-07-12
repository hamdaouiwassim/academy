const mongo = require("mongoose");
//var modelBook = mongo.model('books',BooksSchema,'books');
//const response = mongo.model('response',responsesSchema,'responses');
const AttenteReserveBook = mongo.model('AttenteReserveBook');

module.exports.addARB = (req,res,next)=>{
    var attentereservebook = new AttenteReserveBook();
    //console.log(req.body);
    attentereservebook.idbook = req.body.idbook;
    attentereservebook.iduser = req.body.iduser;
    attentereservebook.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"reservation dans la liste d'attente ajoutee avec succes .. !"})
            }
            
    })


}

module.exports.allListeAttenteBooks = (req,res,next)=>{
    //var quiz = new Quiz();
    //idcour = req.body.idcour;
    AttenteReserveBook.find({},function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
  
}

module.exports.allListeAttenteBooksUser = (req,res,next)=>{
    //var quiz = new Quiz();
    iduser = req.body.iduser;
    AttenteReserveBook.find({ iduser : iduser },function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
  
}




module.exports.deleteAttenteReserveBook = (req,res,next)=>{
    AttenteReserveBook.remove({_id:req.body.id},function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Attente Reservation  livre supprimee .. !"})
        }
    })

}


/*
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
*/
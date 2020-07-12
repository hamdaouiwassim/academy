const mongo = require("mongoose");
//var modelBook = mongo.model('books',BooksSchema,'books');
//const response = mongo.model('response',responsesSchema,'responses');
const AttenteReserveEvent = mongo.model('AttenteReserveEvent');

module.exports.addARE = (req,res,next)=>{
    var attentereserveevent = new AttenteReserveEvent();
    //console.log(req.body);
    attentereserveevent.idevent = req.body.idevent;
    attentereserveevent.iduser = req.body.iduser;
    attentereserveevent.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"reservation dans la liste d'attente ajoutee avec succes .. !"})
            }
            
    })


}

module.exports.allListeAttenteEvents = (req,res,next)=>{
    //var quiz = new Quiz();
    //idcour = req.body.idcour;
    AttenteReserveEvent.find({},function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
  
}

module.exports.allListeAttenteEventsUser = (req,res,next)=>{
    //var quiz = new Quiz();
    iduser = req.body.iduser;
    AttenteReserveEvent.find({ iduser : iduser },function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
  
}




module.exports.deleteAttenteReserveEvent = (req,res,next)=>{
    AttenteReserveEvent.remove({_id:req.body.id},function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Attente Reservation  Evenement supprimee .. !"})
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
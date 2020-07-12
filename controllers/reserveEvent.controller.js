const mongo = require("mongoose");
//var modelBook = mongo.model('books',BooksSchema,'books');
//const response = mongo.model('response',responsesSchema,'responses');
const ReserveEvent = mongo.model('ReserveEvent');


module.exports.addEvent = (req,res,next)=>{
    var reserveevent = new ReserveEvent();
    console.log(req.body);
    reserveevent.idevent = req.body.idevent;
    reserveevent.iduser = req.body.iduser;
    reserveevent.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"reservation ajoutee avec succes .. !"})
            }
            
    })


}

module.exports.allreservationsevents = (req,res,next)=>{
    //var quiz = new Quiz();
    //idcour = req.body.idcour;
    ReserveEvent.find({},function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
  
}

module.exports.allreservationseventsuser = (req,res,next)=>{
    //var quiz = new Quiz();
    iduser = req.body.iduser;
    ReserveEvent.find({ iduser : iduser },function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
  
}




module.exports.deleteReserveEvent = (req,res,next)=>{
    ReserveEvent.remove({_id:req.body.id},function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Reservation livre supprimee .. !"})
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
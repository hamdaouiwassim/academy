const mongo = require("mongoose");
//var modelBook = mongo.model('books',BooksSchema,'books');
//const response = mongo.model('response',responsesSchema,'responses');
const ReserveBook = mongo.model('ReserveBook');

module.exports.addRB = (req,res,next)=>{
    var reservebook = new ReserveBook();
    console.log(req.body);
    reservebook.idbook = req.body.idbook;
    reservebook.iduser = req.body.iduser;
    reservebook.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"reservation ajoutee avec succes .. !"})
            }
            
    })


}

module.exports.allreservationsbooks = (req,res,next)=>{
    //var quiz = new Quiz();
    //idcour = req.body.idcour;
    ReserveBook.find({},function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
  
}

module.exports.allreservationsbooksuser = (req,res,next)=>{
    //var quiz = new Quiz();
    iduser = req.body.iduser;
    console.log(req.body);
    ReserveBook.find({ iduser : iduser },function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
  
}




module.exports.deleteReserveBook = (req,res,next)=>{
    ReserveBook.remove({_id:req.body.id},function(err){
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
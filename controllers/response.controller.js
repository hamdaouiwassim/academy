const mongo = require("mongoose");
//var modelBook = mongo.model('books',BooksSchema,'books');
//const response = mongo.model('response',responsesSchema,'responses');
const Response = mongo.model('Response');


module.exports.addresponse = (req,res,next)=>{
    var response = new Response();
    response.idquiz = req.body.idquiz;
    response.response = req.body.response;
    response.state = req.body.state;
    response.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"response ajoutee avec succes .. !"})
            }
            
    })


}




module.exports.updateresponse = (req,res,next)=>{
    //var response = new response();
    //idcour = req.body.idcour;
    //response.find({idcour:'5f02e3a8b5fe872824448e56'},function(err,data){
        Response.findByIdAndUpdate(req.body._id,{ response : req.body.response , state : req.body.state  },function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send({data: "response modifiee avec success"});
            }
            
    })

  
}

module.exports.deleteresponse = (req,res,next)=>{
    Response.remove({_id:req.body.id},function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"response supprimee .. !"})
        }
    })

}
module.exports.allquizresponse = (req,res,next)=>{
    idquiz = req.query.id;
    Response.find({idquiz:idquiz},function(err,data){
            if(err){  
              res.send(err);
            }
            else{
                res.send(data);
            }
            
    })
}


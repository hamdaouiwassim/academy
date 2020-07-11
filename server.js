
var express = require("express");
var path = require("path");
var mongo = require("mongoose");
var bodyparser = require("body-parser");
const { version } = require("os");
const cors = require('cors');

require('./config/config');
require("./models/db");
require('./config/passportConfig');
const passport = require('passport');

const rtsIndex = require("./routes/index.router"); 

var app = express();
app.use(bodyparser());
app.use(bodyparser.json({limit:'5mb'}));
app.use(bodyparser.urlencoded({extended:true}));

/*app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','GET , POST  , PUT , PATCH , DELETE , OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','x-requested-with,Content-Type, Accept, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});
*/
app.use(cors());

// Book Modele
var Schema = mongo.Schema;
var BooksSchema = new Schema({
    name:{ type: String },
    description : { type : String },
    addeddate : { type : Date },
    disponible : { type : Boolean }

},{versionKey : false} )
var modelBook = mongo.model('books',BooksSchema,'books');


app.post('/api/SaveBook',function(req,res){
    var mod = new modelBook(req.body);
    mod.save(function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"livre ajoutee avec succes .. !"})
        }

    });
})

app.post('/api/UpdateBook',function(req,res){
    var mod = new modelBook(req.body);
    modelBook.findByIdAndUpdate(req.body._id,{name : req.body.name , description : req.body.description , disponible : req.body.disponible },function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"livre modifiee avec succes .. !"})
        }

    });
})

app.post('/api/DeleteBook',function(req,res){
    modelBook.remove({_id:req.body.id},function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"livre supprimee .. !"})
        }
    })
})

app.get("/api/getbooks",function(req,res){
    modelBook.find({},function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data)
        }
    })
})

// Course Modele
var CoursesSchema = new Schema({
    name:{ type: String },
    description : { type : String },
    auther : { type : String },
    document : { type : String }

},{versionKey : false} )
var modelCourses = mongo.model('courses',CoursesSchema,'courses');

app.post('/api/SaveCourse',function(req,res){
    var mod = new modelCourses(req.body);
    mod.save(function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Cour ajoutee avec succes .. !"})
        }

    });
})

app.post('/api/UpdateCourse',function(req,res){
    var mod = new modelCourses(req.body);
    modelCourses.findByIdAndUpdate(req.body._id,{name : req.body.name , description : req.body.description ,  auther : req.body.auther  },function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Cour modifiee avec succes .. !"})
        }

    });
})
app.post('/api/DeleteCourse',function(req,res){
    modelCourses.remove({_id:req.body.id},function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Cour supprimee .. !"})
        }
    })
})
app.get("/api/getCourses",function(req,res){
    modelCourses.find({},function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data)
        }
    })
})






// Event Modele
var EventsSchema = new Schema({
    name:{ type: String },
    description : { type : String },
    placenumber : { type : Number },
    eventdate : { type : Date },
    addeddate : { type : Date }

},{versionKey : false} )
var modelEvents = mongo.model('events',EventsSchema,'events');

app.post('/api/SaveEvent',function(req,res){
    var mod = new modelEvents(req.body);
    mod.save(function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Evenemet ajoutee avec succes .. !"})
        }

    });
})
app.post('/api/DeleteEvent',function(req,res){
    modelEvents.remove({_id:req.body.id},function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"livre supprimee .. !"})
        }
    })
})
app.post('/api/UpdateEvent',function(req,res){
    var mod = new modelEvents(req.body);
    modelEvents.findByIdAndUpdate(req.body._id,{name : req.body.name , description : req.body.description ,  placenumber : req.body.placenumber , eventdate : req.body.eventdate },function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Evenement modifiee avec succes .. !"})
        }

    });
})

app.get("/api/getevents",function(req,res){
    modelEvents.find({},function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data)
        }
    })
})

app.use(passport.initialize());
app.use('/api',rtsIndex);
app.use((err,req,res,next) => {
        if (err.name == 'ValidationError'){
            valErrors = [];
            Object.keys(err.errors).forEach(key=> valErrors.push(err.errors[key].message));
            res.status(422).send(valErrors);
            
        }
});

app.listen(8080,function(){
    console.log("Example app listening on port 8080 ");
})
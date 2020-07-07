// Book Modele
var mongo = require("mongoose");
var Schema = mongo.Schema;
var BooksSchema = new Schema({
    name:{ type: String },
    description : { type : String },
    addeddate : { type : Date },
    disponible : { type : Boolean }

});

mongo.model('Book',BooksSchema,'books');


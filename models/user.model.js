var mongo = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongo.Schema({
    fullname : { type : String ,
    required : "le nom utilisateur ne peut pas etre vide" },
    email : { type : String,
        required : "l\'email ne peut pas etre vide",
        unique : true },
    password : { type : String,
        required : "le mot de passe ne peut pas etre vide",
        minlength : [8,"8 caracteres aux minimum pour le mot de passe"]},
    saltsecret : { type : String },
    role : { type : String }

});
// custom validation email
userSchema.path('email').validate((val)=>{
    emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(val);
},'Email non valide');
// Events
userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password = hash;
            this.saltsecret = salt;
            next();
        });
    });
});

// methods
userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password,this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({
        _id: this._id
    }, process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
}

mongo.model('User',userSchema,'users');
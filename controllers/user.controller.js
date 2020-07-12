const mongo = require("mongoose");
const User = mongo.model('User');
const passport = require('passport');
const _ = require('lodash');

module.exports.register = (req,res,next)=>{
    var user = new User();
    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.password = req.body.password;
    user.role = "user";
    user.save((err,doc)=>{
        if(!err)
            res.send(doc);
        else{
            if (err.code == 11000)
                res.status(422).send(['Email existe deja'] );
            else
                return next(err);
        }
            
    })


}


module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered user
        if (user) return res.status(200).json({ "token": user.generateJwt() , 'user': user });
        // unknown user or wrong password
        else return res.status(401).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'utilisateur non trouve.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['_id','fullname','email']) });
        }
    );
}


module.exports.getallusers = (req, res, next) =>{
    User.find({},function(err,data){
        if(err){  
          res.send(err);
        }
        else{
            res.send(data);
        }
        
})
}
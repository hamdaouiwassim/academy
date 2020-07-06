var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
const mongo = require('mongoose');

var User = mongo.model('User');
passport.use(
    new localStrategy({ usernameField : 'email'},
    ( username , password , done ) => {
        User.findOne({email: username},
            (err,user) => {
                if (err)
                    return done(err);
                    // unknown user
                else if (!user)
                    return done(null,false,{message : 'Email n\'existe pas'});
                    // wrong password
                else if (!user.verifyPassword(password))
                    return done(null,false,{message : 'mot passe errone'});
                    // authentification succeeded
                else
                    return done(null,user);
            });
        })
);
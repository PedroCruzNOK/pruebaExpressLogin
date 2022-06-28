const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use('local-registro', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,

}, async (req, email, password, done) => {
    const user = new User();
    user.email = email;
    user.password = password;
    await user.save();
    done(null, user);
}))
const express = require ('express');
const engine = require('ejs-mate');
const path= require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
require('./database');
require('./jwt/auth');

app.set('views', path.join (__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'mySecretsession',
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    app.locals.registroMessage = req.flash('registroMessage');
    next();
});

//routes
app.use('/', require('./routes/index'));


app.listen(app.get('port'), () => {
    console.log('servidor corriendo', app.get('port'));
});
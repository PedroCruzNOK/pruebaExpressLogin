const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) =>{
    res.render('index');
});

router.get('/registro', (req, res, next)=>{
    res.render('registro');
});

router.post('/registro', passport.authenticate('local-registro',{
    successRedirect: '/inicio',
    failureRedirect: '/registro',
    passReqToCallback: true
}));

router.get('/entrar', (req, res, next)=>{
    res.render('entrar');
});

router.post('/entrar', passport.authenticate('local-entrar', {
    successRedirect: '/inicio',
    failureRedirect: '/entrar',
    passReqToCallback: true
})); 

router.get ('/cerrar', (req, res, next) => {
    req.logout(req.logOut);
    res.redirect('/entrar');
});


router.get('/inicio', isAuthenticated,(req, res, next)=>{
    res.render('inicio');
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/entrar');
};

module.exports = router;
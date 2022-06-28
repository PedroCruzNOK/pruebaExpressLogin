const express = require('express');
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

});

router.post('/entrar', (req, res, next)=>{

});

router.get('/inicio', (req, res, next)=>{
    res.render('inicio');
});

module.exports = router;
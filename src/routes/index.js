const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) =>{
    res.render('index');
});

router.get('/registro', (req, res, next)=>{
    res.render('registro');
});

router.post('/registro', (req, res, next)=>{
    console.log(req.body);
    res.send('recibido');
});

router.get('/entrar', (req, res, next)=>{

});

router.post('/entrar', (req, res, next)=>{

});

module.exports = router;
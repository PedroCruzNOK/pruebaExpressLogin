const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render('index');
});

router.get('/registro', (req, res, next)=>{

});

router.post('/registro', (req, res, next)=>{

});

router.get('/entrar', (req, res, next)=>{

});

router.post('/entrar', (req, res, next)=>{

});

module.exports = router;
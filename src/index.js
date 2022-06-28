const express = require ('express');
const engine = require('ejs-mate');
const path= require('path');
const morgan = require('morgan');


const app = express();
require('./database');

app.set('views', path.join (__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', require('./routes/index'));


app.listen(app.get('port'), () => {
    console.log('servidor corriendo', app.get('port'));
});
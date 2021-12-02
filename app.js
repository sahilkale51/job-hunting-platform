const express = require('express');
const app = express();
const morgan = require('morgan');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;
app.use(morgan('dev'));
app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res)=>{
    res.render('index');
})


app.get('*',(req,res)=>{
    res.send('SOrry lol page not found!!');
})



app.listen(PORT,()=>{
    console.log(`The app is up and running at ${PORT} `);
})
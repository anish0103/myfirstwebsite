const express = require('express')
const path = require('path');
const app = express();
const port = 80;

app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'view'))

app.get('/', (req, res)=>{
    res.render('index.pug');
})

app.get("/about",(req, res)=>{
    res.send("About me. Hi I'm Anish Patel from anand. contact no. xxxxxxxxxx");
});

app.listen(port, ()=>{
    console.log(`Application running on Port ${port}`);
});
const express = require('express')
const path = require('path');
const app = express();
const port = 80;

const filepath = path.join(__dirname, "./public/")
app.use(express.static(filepath))

app.get('/', (req, res)=>{
    res.send('Hello There:)');
})

app.listen(port, ()=>{
    console.log(`Application running on Port ${port}`);
});
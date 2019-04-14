const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port',4000)
app.set('json spaces', 2)

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        "name":"Mauricio",
        "lastname":"Sanchez"
    })
})

app.get('/name',(req,res)=>{
    res.json({
        "name":"Pedro",
        "lastname":"Marciano"
    })
})


app.listen(app.get('port'), ()=>{
    console.log('Server on port 4000')
})
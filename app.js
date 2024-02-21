const express = require('express');
const app = express();

const users = require('./Mockdata.json')


app.get('./',(req,res)=>{
    re
})
app.get('/users',(req,res)=>{
    return res.json.send(users);
})
app.listen(5000, () => console.log("surver running on port 5000"));





const express = require('express');
const app = express();
const cors = require('cors');

const viewApi = require('./router/viewApi');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use('/', viewApi);

app.listen(3000,()=>{
    console.log('running');
});
const express = require('express');
const router = express.Router();

let Arr = [
    {id:1,name:"Apple"},
    {id:2,name:"Pineapple"}
];

router.get('/',(req,res)=>{
    res.send(Arr);
});

router.post('/post/',(req,res,next)=>{
    const id = req.body.id;
    const name = req.body.name;
    Arr.push({id,name});
    console.log(Arr);
    res.redirect('/');
    next();
});

module.exports = router;
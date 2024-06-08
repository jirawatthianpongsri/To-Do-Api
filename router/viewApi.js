const express = require('express');
const router = express.Router();

let Arr = [
    { id: 1, name: "Apple iPhone", category: "Electronics" },
    { id: 2, name: "Samsung Galaxy", category: "Electronics" },
    { id: 3, name: "Apple MacBook", category: "Electronics" },
    { id: 4, name: "Dell Inspiron", category: "Computers" },
    { id: 5, name: "Sony Headphones", category: "Accessories" }
];

router.get('/',(req,res)=>{
    res.status(200).json(Arr);
});

router.post('/post/',(req,res,next)=>{
    const {id,name,category} = req.body;
    Arr.push({id,name,category});
    console.log(Arr);
    res.redirect('/');
    next();
});

router.get('/search/',(req,res,next)=>{
    let keywords = req.body.keywords;
    let contains = (arr) => arr.name.includes(keywords);
    let filteredContains = Arr.filter(contains);
    res.status(200).json(filteredContains);
});

module.exports = router;

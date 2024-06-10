const express = require('express');
const router = express.Router();

let products = [
    { id: 1, name: "Apple iPhone", category: "Electronics" },
    { id: 2, name: "Samsung Galaxy", category: "Electronics" },
    { id: 3, name: "Apple MacBook", category: "Electronics" },
    { id: 4, name: "Dell Inspiron", category: "Computers" },
    { id: 5, name: "Sony Headphones", category: "Accessories" }
];

const contains = (arr,keywords) => arr.name.includes(keywords);

router.get('/',(req,res)=>{
    res.status(200).json(Arr);
});

router.post('/post/',(req,res,next)=>{
    const {id,name,category} = req.body;
    products.push({id,name,category});
    console.log(products);
    res.redirect('/');
    next();
});

router.get('/search/',(req,res,next)=>{
    let keywords = req.body.keywords;
    let filteredContains = products.filter(contains(products,keywords));
    res.status(200).json(filteredContains);
});

module.exports = router;

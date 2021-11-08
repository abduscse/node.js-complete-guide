const path = require('path');

const express = require('express');

const adminModule = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In last middleware.');
    // res.send('<h1>Hello from Express.js</h1>');

    // console.log('shop', adminModule.products);
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

    // for render dynamic templates 
    res.render('shop', { prods: adminModule.products, pageTitle: 'Shop' });

});
82
module.exports = router;
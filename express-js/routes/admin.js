const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // console.log('In add-product middleware.');
    // res.send(`
    //     <html>
    //         <head><title>Add Product</title></head>
    //         <body>
    //             <h1>Create/Add Product Screen</h1>
    //             <form action="/admin/add-product" method="post">
    //                 <input type="text" name="productName" required />
    //                 <button type="submit"> Add Product</button>
    //             </form>
    //         </body>
    //     </html>
    // `);

    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
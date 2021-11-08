const path = require('path');

const express = require('express');

const adminModule = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.set('view engine', 'jade');
app.set('view engine', 'pug');

// views is set by default.
app.set('views', 'express-js/views/pug-templates');

// console.log(process.cwd());

// path "/" runs for all the requests
// app.use('/', (req, res, next) => {
//     console.log('this runs for all the requests.');
//     next();
// });

// when bodyParser is available in express itself;
app.use(express.urlencoded({ extended: false }));

// Alternatively
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));

// serving files statically.
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.use('/admin', adminModule.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>404 Page Not Found</h1>');

    // res.sendFile(path.join(__dirname, 'views', '404.html'));

    res.render('404');
});

// const http = require('http');
// const server = http.createServer(app);
// server.listen(3000, () => {
//     console.log('server is listening on port 3000');
// });

// alternatively, we can create server as below.
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});

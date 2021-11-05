const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// path "/" runs for all the requests
// app.use('/', (req, res, next) => {
//     console.log('this runs for all the requests.');
//     next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

// serving files statically.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>404 Page Not Found</h1>');
    res.sendFile(path.join(__dirname, 'views', '404.html'));
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

const path = require('path');

const express = require('express');

const routes = require('./routes');

const app = express();

app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
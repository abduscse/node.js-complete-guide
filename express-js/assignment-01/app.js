const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('Executes for all requests.');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('in get users request.');
    res.send(`
    <html>
        <head><title>Users</title></head>
        <body>
            <h3>List of users</h3>
            <ol>
                <li>Abdus</li>
                <li>Sattar</li>
                <li>Mohammed</li>
            </ol>
        </body>
    </html>
    `);
});

app.use('/', (req, res, next) => {
    console.log('Default response');
    res.send('<h1>Welcome to assignment app</h1>');
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
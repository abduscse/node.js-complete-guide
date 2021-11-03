const fs = require('fs');


const requestHandler = (req, res) => {
    // accessing req object
    // console.log(req.url, req.method, req.headers);

    // to hard terminate the node server and stop listening to the events.
    // process.exit();

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write(`
        <body>
            <form action="/send-message" method="POST">
                <input type="text" name="message" placeholder="Enter your message">
                <button type="submit">Send</button>
            </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }
    // console.log(url, method);
    if (url === '/send-message' && method === 'POST') {
        const body = [];
        req.on('data', (chuck) => {
            // console.log(chuck);
            body.push(chuck);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // fs sync operations will will block the execution
            // fs.writeFileSync('./messages', 'req.body');
            // fs.appendFileSync('messages.txt', message + ' \n');

            fs.appendFile('messages.txt', message + ' \n', error => {
                // 302 is statusCode for redirection
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello for the Server!</h1></body>');
    res.write('</html>');
    res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     text: 'some hard coded text.'
// };

// module.exports.handler = requestHandler;
// module.exports.text = 'some hard coded text';

exports.handler = requestHandler;
exports.text = 'some hard coded text';
let username;
exports.handler = (req, res) => {
    // const url = req.url;
    // const method = req.method;

    // using destructuring in javaScript
    const { url, method } = req;

    if (url === '/' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head><title>Assignment App</title></head>
            <body>
                <h1>Welcome to the assignment server</h1>
                <h3>Create Users</h3>
                <form action="/create-user" method="post">
                    <input type="text" name="username" placeholder="Username" required>
                    <button type="submit">Create</button>
                </form>
            </body>
        </html>
        `);
        return res.end();
    }

    if (url === '/users' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head><title>Assignment App</title></head>
            <body>
                <h1>List of users</h1>
                <ol>
                    <li>Abdus</li>
                    <li>Sattar</li>
                    <li>Mohammed</li>
                    <li>${username}</li>
                </ol>
                <form><button action="/">Back</button></form>
            </body>
        </html>
        `);
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const uName = parsedBody.split('=')[1];
            username = uName;
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        });
    }
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
};

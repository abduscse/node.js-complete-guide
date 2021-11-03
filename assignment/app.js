const http = require('http');
const routes = require('./routes');

const app = http.createServer(routes.handler);

app.listen(3000, () => {
    console.log('listening on port 3000');
});

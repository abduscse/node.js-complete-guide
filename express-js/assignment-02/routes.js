const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {

    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

router.get('/users', (req, res, next) => {
    const rootDir = path.dirname(require.main.filename);
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
});

module.exports = router;
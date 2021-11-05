const path = require('path');

// module.exports = path.dirname(process.mainModule.filename);

// if Above is deprecated, Alternatively
module.exports = path.dirname(require.main.filename);

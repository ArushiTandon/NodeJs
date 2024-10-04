const path = require('path');
const rootDir = require('../misc/path');

exports.geterror = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'..','views', '404.html'));
}
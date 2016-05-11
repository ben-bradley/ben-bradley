'use strict';

var _fs = require('fs');

var portrait = __dirname + '/../data/ascii-portrait.txt';

(0, _fs.createReadStream)(portrait, 'utf8').pipe(process.stdout);

// oink!
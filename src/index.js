'use strict';

import { createReadStream } from 'fs';

const portrait = __dirname + '/../data/ascii-portrait.txt';

createReadStream(portrait, 'utf8')
  .pipe(process.stdout);
  
// oink!

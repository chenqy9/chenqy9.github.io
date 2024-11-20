const http = require('node:https');
const fs  = require('node:fs');
const path = require('node:path');

const sourceFile = fs.createWriteStream(path.resolve(__dirname, '../index.m3u'));

http.get('https://aktv.top/live.m3u', (res) => {
  res.pipe(sourceFile);

  sourceFile.on('finish', () => {
    sourceFile.close();
  });
});

fs.openWriteStream();
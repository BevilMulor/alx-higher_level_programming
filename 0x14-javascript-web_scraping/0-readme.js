#!/usr/bin/node
const fs = require('fs');

const m = process.argv[2];
fs.readFile(m, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

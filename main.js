#!/usr/bin/env node

const fileToWrite = process.argv[2];
const { Writable, Transform } = require('stream');
const { createReadStream, appendFile, unlink } = require('fs');

const writeStream = Writable();
const transform = Transform();

unlink(fileToWrite, (err) => {
  if (err) console.log("error", e.stack);
});


const readFile = createReadStream('languages.json');


transform._transform = (buffer, encoding, done) => {
  done(null, `${buffer.toString().toUpperCase()}`)
}

writeStream._write = (buffer, encoding, done) => {
  appendFile(fileToWrite, buffer, (err) => {
    if (err) console.log('Error', e.stack);
    console.log('Success!');
  });


}
readFile.pipe(transform).pipe(writeStream);

import { readFile,readFileSync  } from 'node:fs';
// const { open } = require('node:fs/promises');
import {open} from 'node:fs/promises'


console.log('starting...')

//synchronous call
// const fileContent = readFileSync('./dummy.txt');
// console.log("Contents: "+fileContent);

//async with calllbacks 
// readFile('./dummy.txt', function(err, data) {
//   if (err) throw err;
//   console.log("Contents: "+data);
// });

// async with promises
// open('./dummy.txt')
//  .then(fileHandle => fileHandle.readFile('utf8'))
//  .then(data => console.log("Contents: "+data))
//  .catch(error => console.log(error))

// async with async/await
async function readFromFileAsync() {
    try{
        const fileHandle = await open('./dummyy.txt');
        const data = await fileHandle.readFile('utf8');
        console.log("Contents: "+data);
    }
    catch(error){
        console.log(error)
    }
   
}
readFromFileAsync();


console.log('ending...')
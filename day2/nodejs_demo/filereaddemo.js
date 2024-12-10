import { readFile,readFileSync  } from 'node:fs';
// const { open } = require('node:fs/promises');
import {open} from 'node:fs/promises'


console.log('starting...')


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

module.exports = {readFromFileAsync}
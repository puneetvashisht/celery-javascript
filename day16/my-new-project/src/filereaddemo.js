// import { readFile,readFileSync  } from 'node:fs';
const { open } = require('node:fs/promises');
// import {open} from 'node:fs/promises'


console.log('starting...')

// async with async/await
function readFromFileAsync(path) {
    return new Promise(async (resolve, reject)=> {
        try{
            const fileHandle = await open(path);
            const data = await fileHandle.readFile('utf8');
            console.log("Contents: "+data);
            resolve(data);
        }
        catch(error){
            console.log(error)
            reject(error)
        }
    })
   
   
}
readFromFileAsync();


console.log('ending...')

module.exports = {readFromFileAsync}
const fetch = require('node-fetch')

async function getData(){
    const res = await fetch('http://localhost:3000/products')
    return res.json();
}

module.exports = {getData}
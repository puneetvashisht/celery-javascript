// Synchronous - blocked for response

// Asynchronous - not blocked

function fetchData(url, timeout){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(url == "api/data1") resolve("Data from API 1");
            else if(url == "api/data2") resolve("Data from API 2");
            else reject("Invalid URL");
        },timeout)
       
    })
}

async function fetchSequentialData(){
    try{
        const data = await fetchData("api/data11", 5000)
        console.log(data)
    
        const data2 = await fetchData("api/data2", 1000)
        console.log(data2)
    }
    catch(error){
        console.log(error)
    }
   
    
}

fetchSequentialData();
console.log('ending...')


// fetchData("api/data1", 5000)
// .then(function(data){
//     console.log(data);
//     return fetchData("api/data2", 1000);
// })
// fetchData("api/data2",1000)
// .then(function(data){
//     console.log(data);
// })
// .catch(error => console.log(error))
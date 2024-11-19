
function fetchWithRetry(url, retries=3){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            const value = Math.random();
            console.log(`Attempt ${retries} value ${value}`);
            if(value < 0.5){
                resolve(`Fetched data from ${url}`)
            }
            else{
                reject(`Failed to fetch data from ${url}`)
            }
            
        },0)  
    }).catch(error => {
        if(retries > 0){
            return fetchWithRetry(url, retries-1)
        }
        else{
            throw error
        }
    })
}

async function fetchDataWithRetry(){
    try{
        const data = await fetchWithRetry("/api/data")
        console.log(data)
    }
    catch(error){
        console.log('Error: ',error);
    }
    
}

fetchDataWithRetry();


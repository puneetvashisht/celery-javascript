async function fetchDataWithDelay(data, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(data), delay)
    })
}
async function fetchDataWithDelayReject(data, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=> reject('Some error!'), delay)
    })
}

module.exports = {fetchDataWithDelay, fetchDataWithDelayReject}
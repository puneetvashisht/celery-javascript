console.log('Starting...');


//macro-task
setTimeout(()=>{
    console.log('Macro task');
}, 0)

//micro-task 
Promise.resolve()
.then(()=> console.log('First then block'))
.then(()=> console.log('Second then block'));



console.log('Finishing...');


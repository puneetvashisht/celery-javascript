'use strict';

// Common JS
const greet = require('./greet');
// ESM
// import greet from './greet'

console.log('index.js');
console.log('starting..');
console.log(greet());


//asynchronous call
function foo(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('foo function called...');
            resolve("success");
        }, 5000);
    }) 
}

// var result = foo();
foo()
.then(function(result){
    console.log('result:', result);
    return result[0]
})
.then(function(result){
    console.log('result again:', result);
});

// console.log('result:', result);

console.log('ending..');

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIkQ6L3dvcmsvdHJhaW5pbmdzL2NlbGVyeS1qYXZhc2NyaXB0L2RheTIwL2d1bHAtYnVpbGQvc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbW1vbiBKU1xyXG5jb25zdCBncmVldCA9IHJlcXVpcmUoJy4vZ3JlZXQnKVxyXG4vLyBFU01cclxuLy8gaW1wb3J0IGdyZWV0IGZyb20gJy4vZ3JlZXQnXHJcblxyXG5jb25zb2xlLmxvZygnaW5kZXguanMnKTtcclxuY29uc29sZS5sb2coJ3N0YXJ0aW5nLi4nKTtcclxuY29uc29sZS5sb2coZ3JlZXQoKSk7XHJcblxyXG5cclxuLy9hc3luY2hyb25vdXMgY2FsbFxyXG5mdW5jdGlvbiBmb28oKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvbyBmdW5jdGlvbiBjYWxsZWQuLi4nKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShcInN1Y2Nlc3NcIilcclxuICAgICAgICB9LCA1MDAwKVxyXG4gICAgfSkgXHJcbn1cclxuXHJcbi8vIHZhciByZXN1bHQgPSBmb28oKTtcclxuZm9vKClcclxuLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6JywgcmVzdWx0KVxyXG4gICAgcmV0dXJuIHJlc3VsdFswXVxyXG59KVxyXG4udGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgY29uc29sZS5sb2coJ3Jlc3VsdCBhZ2FpbjonLCByZXN1bHQpXHJcbn0pXHJcblxyXG4vLyBjb25zb2xlLmxvZygncmVzdWx0OicsIHJlc3VsdCk7XHJcblxyXG5jb25zb2xlLmxvZygnZW5kaW5nLi4nKTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUM7Ozs7QUFJaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs7OztBQUlyQixTQUFTLEdBQUcsRUFBRTtJQUNWLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQ3hDLFVBQVUsQ0FBQyxVQUFVO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsU0FBUyxFQUFDO1NBQ3JCLEVBQUUsSUFBSSxFQUFDO0tBQ1gsQ0FBQztDQUNMOzs7QUFHRCxHQUFHLEVBQUU7Q0FDSixJQUFJLENBQUMsU0FBUyxNQUFNLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQzlCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQztDQUNuQixDQUFDO0NBQ0QsSUFBSSxDQUFDLFNBQVMsTUFBTSxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBQztDQUN2QyxFQUFDOzs7O0FBSUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMifQ==
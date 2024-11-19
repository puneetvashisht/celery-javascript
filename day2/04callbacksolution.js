function getUser(id){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log(`User with id ${id} fetched successfully`);
            resolve({id, name: 'John Doe'}) ;
        },5000)
    }) 
}

function getPosts(user){
    return new Promise((resolve, reject)=> {
    setTimeout(()=> {
        console.log(`Posts fetched for user ${user.name}`);
        resolve([{id: 1, title: 'Post 1'}, {id: 2, title: 'Post 2'}]);
    },1000)
    })
}

function getComments(post){
    return new Promise((resolve, reject)=> {
    setTimeout(()=> {
        console.log(`Comments fetched for post ${post.title}`);
        resolve([{id: 1, text: 'Comment 1'}, {id: 2, text: 'Comment 2'}]);
    },1000)
    })
}
console.log('starting...')
// synchronous and not async
// const user = getUser(12);
// console.log(user)


getUser(12)
.then(user=>{
    console.log(user);
    return getPosts(user);
})
.then(posts=>{
    console.log(posts) 
    return getComments(posts);
})
.then(comments=>console.log(comments))

// Callback Hell!
// getUser(12, function(user){
//     console.log(user);
//     getPosts(user, function(posts){
//         console.log(posts) 
//             getComments(posts, function(comments){
//                 console.log(comments)
//             })
//         })
// })
// getPosts({id: 2, name: 'John Doe'}, function(post){
//     console.log(post)
// })

console.log('ending...')
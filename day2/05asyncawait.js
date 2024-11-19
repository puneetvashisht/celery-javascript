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

// async/await

async function fetchSequentialData(){
        const user = await getUser(12);
        console.log(user);
        const posts = await getPosts(user);
        console.log(posts)  // Accessing first post
        const comments = await getComments(posts);
        console.log(comments)
}


fetchSequentialData();


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
function getUser(id, callback){
    setTimeout(()=> {
        console.log(`User with id ${id} fetched successfully`);
        callback({id, name: 'John Doe'}) ;
    },5000)
}

function getPosts(user, fn){
    setTimeout(()=> {
        console.log(`Posts fetched for user ${user.name}`);
        fn([{id: 1, title: 'Post 1'}, {id: 2, title: 'Post 2'}]);
    },1000)
}

function getComments(post, callback){
    setTimeout(()=> {
        console.log(`Comments fetched for post ${post.title}`);
        callback([{id: 1, text: 'Comment 1'}, {id: 2, text: 'Comment 2'}]);
    },1000)
}
console.log('starting...')
// synchronous and not async
// const user = getUser(12);
// console.log(user)

// Callback Hell!
getUser(12, function(user){
    console.log(user);
    getPosts(user, function(posts){
        console.log(posts) 
            getComments(posts, function(comments){
                console.log(comments)
            })
        })
})
// getPosts({id: 2, name: 'John Doe'}, function(post){
//     console.log(post)
// })

console.log('ending...')
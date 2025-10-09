let nextPostID=2

let posts=[
    {
        postid: 1,
        message:"hello",
        user: "user1"
    },{
        postid: 0,
        message:"goodbye",
        user: "user2"
    }
]

function newPost(message, username){
    let thisPost={
        postid: nextPostID++,
        message: message,
        user: username
    }
    posts.unshift(thisPost)
}

function getPosts(){
    return posts.slice()
}

module.exports={
    newPost,
    getPosts
}
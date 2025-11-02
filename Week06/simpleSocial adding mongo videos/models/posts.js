let nextPostID=3

let postData=[
    {
        postid: 0,
        message:"Hi it's Dave",
        user:"Dave"
    },{
        postid: 1,
        message:"Glad it's Thursday",
        user:"Julie"
    },{
        postid: 2,
        message:"I'm hungry",
        user:"Sam"
    }
]

function getPosts(){
    return postData.slice()
}

function addPost(message, user){
    let newPost={
        postid: nextPostID++,
        message: message,
        user: user
    }
    postData.push(newPost)
}

function getLastNPosts(n=3){
    return postData.slice(-n).reverse()
}

module.exports={
    getPosts,
    addPost,
    getLastNPosts
}
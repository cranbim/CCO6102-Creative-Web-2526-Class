// let nextPostID=3

// let postData=[
//     {
//         postid: 0,
//         message:"Hi it's Dave",
//         user:"Dave"
//     },{
//         postid: 1,
//         message:"Glad it's Thursday",
//         user:"Julie"
//     },{
//         postid: 2,
//         message:"I'm hungry",
//         user:"Sam"
//     }
// ]

const mongoose=require('mongoose')
const {Schema, model} = mongoose

const postSchema=new Schema({
    user: String,
    message: String,
    likes: Number,
    time: Date
})

const postData=model('posts', postSchema)

async function getPosts(){
    // return postData.slice()
    let foundData=[]
    postData.find({})
    .then(mongoData=>{
        foundData=mongData
    })
    return foundData
}

function addPost(message, user){
    let newPost={
        // postid: nextPostID++,
        message: message,
        user: user,
        likes: 0,
        time: Date.now()
    }
    // postData.push(newPost)
    postData.create(newPost)
    .catch(err=>{
        console.log(err)
    })
}

async function getLastNPosts(n=3){
    // return postData.slice(-n).reverse()
    let foundData=[]
    // await postData.find({}).sort({'time': -1}).limit(n).exec()
    // .then(mongoData=>{
    //     // console.log(mongoData)
    //     foundData=mongoData
    // })
    foundData=await postData.find({}).sort({'time': -1}).limit(n).exec()
    // .then(mongoData=>{
    //     // console.log(mongoData)
    //     foundData=mongoData
    // })
    return foundData
}

module.exports={
    getPosts,
    addPost,
    getLastNPosts
}
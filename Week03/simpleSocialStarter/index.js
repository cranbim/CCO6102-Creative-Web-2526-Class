const express= require('express')
const app=express()
const path=require('path')

// const posts=require('./models/posts.js')

// const users=require('./models/users.js')
// console.log(users.getUsers())


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))

app.get('/app', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'app.html'))
})

app.get('/login', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'login.html'))
})

app.get('/register', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'register.html'))
})

// app.post('/register', (request, response)=>{
    // if(users.newUser(request.body.username, request.body.password)){
    //     response.sendFile(path.join(__dirname, '/views', 'login.html'))
    //     console.log(users.getUsers())
    // } else {
    //     response.sendFile(path.join(__dirname, '/views', 'registration_failed.html'))
    // }
// })

// app.post('/login', (request, response)=>{
//    if(users.checkPassword(request.body.username, request.body.password)){
//         console.log('valid user')
//         response.sendFile(path.join(__dirname, '/views', 'app.html'))
//    } else {
//         console.log('invalid user')
//         response.sendFile(path.join(__dirname, '/views', 'notloggedin.html'))
//    }
// })


app.get('/logout', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'logout.html'))
})


// app.get('/getposts', (request, response)=>{
//     // response.json({posts: posts.getLastNPosts(3).reverse()})
// })

// app.post('/newpost', (request, response)=>{
//     // posts.addNewPost('userX', request.body.message)
//     response.sendFile(path.join(__dirname, '/views', 'app.html'))
// })


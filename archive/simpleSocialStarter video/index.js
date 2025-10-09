const express= require('express')
const app=express()
const path=require('path')

const posts=require('./models/posts')
const users=require('./models/users')

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))

app.get('/app', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'app.html'))
})

app.get('/getposts', (request, response)=>{
    response.json({posts:posts.getPosts()})
})

app.post('/newpost', (request, response)=>{
    console.log(request.body)
    posts.newPost(request.body.message, "userX")
    response.sendFile(path.join(__dirname, '/views', 'app.html'))
})

app.get('/login', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'login.html'))
})

app.get('/register', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'register.html'))
})

app.post('/register', (request, response)=>{
    if(users.addUser(request.body.username, request.body.password)){
        response.sendFile(path.join(__dirname, '/views', 'login.html'))
    }
    response.sendFile(path.join(__dirname, '/views', 'registration_failed.html'))
})

app.post('/login', (request, response)=>{
    if(users.checkUser(request.body.username, request.body.password)){
        response.sendFile(path.join(__dirname, '/views', 'app.html'))
    } else {
        console.log("invalid user")
        response.sendFile(path.join(__dirname, '/views', 'login_failed.html'))
    }
})

app.get('/logout', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'logout.html'))
})



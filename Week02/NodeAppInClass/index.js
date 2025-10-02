const express = require('express')
const app = express()
const path= require('path')
const cors=require('cors')

app.use(cors())
app.use(express.static('./public'))

app.use(express.urlencoded({extended: false}))

app.listen(3000, ()=>console.log('listening on port 3000'))

app.get('/dave', (request, response)=>{
    response.sendFile(path.join(__dirname,'/views','notatest.html'))
})

app.get("/app", (request, response)=>{
    response.sendFile(path.join(__dirname,'/views','application.html'))
})

app.get('/getrabbits',(request, response)=>{
    response.json(data)
})

app.post('/newrabbit', (request, response)=>{
    // console.log(request.body)
    let newRabbit={
        name: request.body.name,
        colour: request.body.colour
    }
    data.rabbits.push(newRabbit)
})

let data={
    rabbits:[
        {
            name: "Noodle",
            colour: "white"
        },
        {
            name: "Blossom",
            colour: "Brown"
        },{
            name: "Sally",
            colour: "Black"
        }
    ]
}

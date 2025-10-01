const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

app.get('/test', (request, response)=>{
    response.sendFile(path.join(__dirname,'/views','notatest.html'))
})

app.get('/dave', (request, response)=>{
    response.sendFile(path.join(__dirname,'/views','davesays.html'))
})

app.get('/getrabbits', (request, response)=>{
    response.json({rabbits: rabbitData})
})


let rabbitData=[
    {
        name: "Noodle",
        colour: "white",
        yod: "2024"
    },{
        name: "Blossom",
        colour: "agouti",
        yod: "2022"
    },{
        name: "Matty",
        colour: "blue",
        yod: "2023"
    }
]
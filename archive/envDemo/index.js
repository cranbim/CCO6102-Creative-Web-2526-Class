const dotenv=require('dotenv')
dotenv.config()

let mySecret=process.env.mySecret//"I will never tell"
let apikey=process.env.myAPIKey//25653264523894723

console.log(mySecret)
console.log(apikey)
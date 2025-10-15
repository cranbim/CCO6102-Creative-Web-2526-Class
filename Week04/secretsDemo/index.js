const dotenv=require('dotenv')
dotenv.config()

const envSecret=process.env.mySecret;
const envSecretNumber=process.env.mySecretNumber
// const mySecret="I will never tell!"
// const myPassword="QWERTY123"
// const myAPIKey="368273f251263c6212a278"
// const mySecretNumber=23

console.log(envSecret)
// console.log(envSecretNumber)
console.log(encrypt(100))

function encrypt(num){
    return num+Number(envSecretNumber)
}
console.log("hello")

function addTwoNums(num1, num2){
    return num1+num2
}

function logToConsole(thing){
    console.log("I am logging this>>>> ",thing)
}

function addAndLog(num1, num2, loggingFunction){
    let sum=num1+num2
    loggingFunction(sum)
}

function testIfEven(num){
    return num%2==0
}

function yayItsEven(){
    console.log("Yay it's even")
}

function booItsOdd(){
    console.log("boo!!! it's an odd number")
}


function testThisNumber(num, test, success, fail){
    if(test(num)){
        success()
    } else {
        fail()
    }
}
console.log("code is running")
let a=23
console.log(a+10)

function sum3nums(num1, num2, num3){
    return num1+num2+num3
}

console.log(sum3nums(10,20,30))

let myArray=[1,2,3,4,5]

function meanOfArrayNums(arr){
    let total=0
    // for(let i=0; i<arr.length; i++){
    //     total+=arr[i]
    // }
    arr.forEach(el=>total=total+el)
    return total/arr.length
}

console.log(meanOfArrayNums(myArray))

let newArray=[4,5,7,9,10,13,4,7]

function halveAndRoundArray(arr){
    let tempArray=[]
    arr.forEach((num,i)=>{
        tempArray[i]=Math.floor(num/2)
    })
    return tempArray
}

function halveAndRoundArrayWithMap(arr){
    return arr.map(num=>Math.floor(num/2))
}

console.log(halveAndRoundArray(newArray))
console.log(halveAndRoundArrayWithMap(newArray))

let myWords=["this", "is", "my", "sentence"]

function reverseWords(words){
    for(let i=words.length-1; i>=0; i--){
        console.log(words[i])
    }
}

reverseWords(myWords)
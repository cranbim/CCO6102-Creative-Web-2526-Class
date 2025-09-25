
let a=10;
console.log(a+2);

const c=99
console.log(c+1);

let dave="great"

 function addOne(num){
    return num+1;
 }

 function howIsDave(){
    let dave="rubbish"
    console.log("Dave is:"+dave)
 }

 console.log(addOne(100));

howIsDave();

 console.log(dave);

 function sumNumbers(num1, num2, num3){
    return num1+num2+num3;
 }

 let sumThreeNumbers=(n1, n2, n3) => {
    return n1+n2+n3;
 }

 console.log(sumNumbers(20,13,99));

//  for(let i=99; i>=0; i--){
//     console.log(i+" bottles of beer on the wall");
//  }

 let myNums=[9,5,3,7,2,100,300, 43]

//  for(let i=0; i<myNums.length; i++) {
//     console.log("my number is "+myNums[i])
//  }

 myNums.forEach(num => {
    console.log("my number is "+num)
 })

 function getMean(arr){
    let sum=0;
    arr.forEach(num => sum+=num)
    return sum/arr.length
 }

 let numbers=[999,1001,1023,986]
 console.log(getMean([1,12,4,13]))
 console.log(getMean(numbers))

 let h=document.getElementById("heading")
 h.innerText="Hello Dave"

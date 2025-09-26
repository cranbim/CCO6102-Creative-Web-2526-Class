let myP=document.getElementById("myp")

// myP.innerText="Hello Dave"
let myH1=document.createElement("H1")
myH1.innerText="a new heading"
document.body.appendChild(myH1)

function createAndAddPara(){
    let newP=document.createElement("p")
    newP.innerText="some new text"
    document.body.appendChild(newP)
}

let isButtonOn=false
let onOffButton=document.getElementById("onoff")

function toggleOnOff(){
    isButtonOn=!isButtonOn
    // if(isButtonOn){
    //     onOffButton.innerText="on"
    // } else {
    //     onOffButton.innerText="off"
    // }
    onOffButton.innerText=isButtonOn?"on":"off"

}



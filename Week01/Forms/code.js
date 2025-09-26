console.log("running")

let myForm=document.getElementById("myform")
myForm.addEventListener("submit", submitted)

let students=[]

function submitted(event){
    event.preventDefault()
    console.log("form was submitted")
    console.log(event.target.firstname.value)
    console.log(event.target.livesin)
    let newStudent={
        name:event.target.firstname.value,
        livesin:event.target.livesin.value
    }
    students.push(newStudent)
    console.log(students)
    console.log(JSON.stringify(students))
}
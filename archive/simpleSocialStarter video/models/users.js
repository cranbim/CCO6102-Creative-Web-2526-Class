let users=[
    {
        username: "user1",
        password: "123"
    },{
        username: "user2",
        password: "456"
    }
]

function addUser(username, password){
    let existingUser=findUser(username)
    console.log(existingUser)
    if(!existingUser){
        let newUser={
            username:username,
            password:password
        }
        users.push(newUser)
        console.log(users)
        return true
    }
    return false
}

function checkUser(username, password){
    let foundUser=findUser(username)
    if(foundUser){
        return foundUser.password==password
    }
    return false
}

function findUser(username){
    return users.find(thisUser=>thisUser.username==username)
}

function getUsers(){

}

module.exports={
    addUser,
    checkUser,
    findUser
}


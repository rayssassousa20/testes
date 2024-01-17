class userInformation{
    constructor(name, age, introduction){
        this.name = name
        this.age = age
        this.introduction = introduction
    }

    display(){
        console.log(`username: ${this.name}`)
        console.log(`age: ${this.age}`)
        console.log(`resume: ${this.introduction}`)
    }
}

let displayUserInformation = new userInformation("Rayssa", 18, "Hi!")

displayUserInformation.display()
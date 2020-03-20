
const express = require("express")
const app = express()

const faker = require('faker');

const server = app.listen(8000,() => {
    console.log('server is locked and loaded on port ${server.address().port}')
})



class User{
    constructor() {
        this.id = faker.random.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumberFormat()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor() {
        
            this.id = faker.random.number()
            this.name = faker.company.companyName()
            this.address = {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state:faker.address.state(),
                zipCode:faker.address.zipCode(),
                country:faker.address.country()
            }
        

        
    }
}

console.log(new User())
console.log(new Company())

app.get("/api/users/new" , (req,res) => {
    console.log(new User())
    
    res.send(new User()) 
})

app.get("/api/companies/new" , (req,res) => {
    
    res.send(new Company()) 
})

app.get("/api/user/companies" , (req,res) => {
    const data = {
        user: new User(),
        company: new Company()
    }
    res.send(data) 
    

})






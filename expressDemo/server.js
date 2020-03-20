const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get ("/api",(req,res) => {
    res.send("api server is sending this to browser")
})


app.get ("/api/people",(req,res) => {

    const people = [
        {name:"tom", age : 24},
        {name:"Marry",age: 22}
    ]
    return res.json({allpeople:people})
})

app.post("/api/people/new",(req,res) => {
    console.log(req.body)
    const newPerson = req.body
    return res.status(201).json({newPerson:newPerson})
})

//http://localhost:8000/api/people/whateverIWanted
app.get("/api/people/:whateverIWanted",(req,res) =>  {  
    console.log("req.params.whateverIWanted = ",req.params.whateverIWanted)
    const {whateverIWanted} = req.params
    console.log(whateverIWanted)
    return res.send(whateverIWanted)
})

app.put("/api/users/update/:id",(req,res) => {
    console.log(req.params.id)
    console.log(req.body)
    return res.send(req.params.id)
})

app.delete("/api/users/delete/:id",(req,res) => {
    console.log(req.params.id)
    return res.send(req.params.id)
})






const server = app.listen(8000,() => 
     console.log(`Server is locked and loaded on port${server.address().port}`)
)
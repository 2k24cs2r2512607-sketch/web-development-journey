import express from "express"
let app=express()
let users=[
  {
    "id": 101,
    "name": "Aarav Sharma",
    "position": "Software Engineer",
    "department": "IT",
    "salary": 65000
  },
  {
    "id": 102,
    "name": "Priya Verma",
    "position": "Data Analyst",
    "department": "Analytics",
    "salary": 55000
  },
  {
    "id": 103,
    "name": "Rahul Singh",
    "position": "HR Manager",
    "department": "Human Resources",
    "salary": 70000
  },
  {
    "id": 104,
    "name": "Sneha Gupta",
    "position": "UI/UX Designer",
    "department": "Design",
    "salary": 60000
  },
  {
    "id": 105,
    "name": "Vikram Patel",
    "position": "Marketing Executive",
    "department": "Marketing",
    "salary": 45000
  }
]

app.get("/user/:id",(req,res)=>{//here id is a varible 
    let idx = req.params.id//with params we can send dynamic value
    let exisiting_user = users.find((users)=>(users.id==idx))
    if (!exisiting_user){
        return res.send("404 not found  user does not exist")
    }

    res.json(exisiting_user)
})
// req.query is an object that stores query parameters from url
app.get("/search",(req,res)=>{
    let query = req.query
    res.json(query)
    // output->http://localhost:4000/search?name=ram&age=3,namd=0
                                                                                                                                                                                            
})
app.listen(4000)
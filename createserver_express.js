import express from "express"
const app=express()
const port=3000
app.use(express.json())//middleware - convert user request to json then pass to server
app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})
app.get("/about",(req,res)=>{
    res.end("This is about page")
})
app.post("/",(req,res)=>{
    let body=req.body//to get data that we send
    res.end(body)})

app.get("/contact",(req,res)=>{
    // res.end("<h1>This is contact page</h1>")
    res.json({name:"Iram",class:"BE"})
})
app.listen(port,()=>{console.log(`Server is started at ${port}`)})
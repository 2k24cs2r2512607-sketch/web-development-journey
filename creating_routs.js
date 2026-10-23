import http from "http"
const server=http.createServer((req,res)=>{
    if (req.url=="/"){
        console.log(req.url)
        res.end("welcome to home page")
    }
    else if(req.url=="/about"){
        res.end("this is about page")
    }
    else if(req.url=='/contact'){
        res.end("Contact page")

    }
    else{
        res.end("404 not found")
    }
})
server.listen(8000,()=>{console.log("Server started");})//assigning port
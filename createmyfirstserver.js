// const http=require("http")
import http from "http"
// http is a protocol which helps to comminicate with server
const server = http.createServer((req,res) => {
  res.end("hello this is my first server")
})
server.listen(8000,()=>{console.log("server is started");})
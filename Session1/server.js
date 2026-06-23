const http=require("http")

http.createServer((req,res)=>{
    res.end("Server Success")
}).listen(4000)                 //the port number is 4000
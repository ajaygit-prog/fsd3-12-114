import http from "http" ;

const server = http.createServer() ;

server.on("request" , (req,res) => {
    res.write("Hello from Server") ;
    res.end("ended") ;
}) ;
server.listen(4444 , () => {
    console.log("server is running...") ;
}) ;
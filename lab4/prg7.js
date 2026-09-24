import http from "http";
import {getAllUsers , getUserById, deleteUser, updateUser , addUser} from "./users.js" ;


const server = http.createServer((req, res) => {
  
  if ((req.url === "/api/users" && req.method === "GET")) {
    res.end(JSON.stringify(getAllUsers()));
  } 
  else if ((req.url === "/api/users" && req.method === "POST")) {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end',()=>{
      const user = JSON.parse(body) ;
      const userCreated = addUser(user);
      res.end(JSON.stringify({ msg: "user added", userCreated }));
      res.end(JSON.stringify({ msg: " user added successfully" }));
      console.log(user) ;
    })

  } 
  else if ((req.url.startsWith("/api/users/") && req.method === "GET")) {

    const userId = Number(req.url.split('/').pop())
    const userFound = getUserById(userId);

    if(!userFound){
      res.end(JSON.stringify)
    }
    res.end(JSON.stringify({msg : `showing details of user with id ${userId}`})) ;
    //res.end(JSON.stringify({ msg: "single user with id 1" }));
  } 
  else if ((req.url === "/api/users/1"&& req.method === "PUT")) {
    res.end(JSON.stringify({ msg: "update user 1" }));
  } 
  else if ((req.url === "/api/users/1" && req.method === "DELETE")) {
    res.end(JSON.stringify({ msg: "remove 1" }));
  } 
  else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {console.log("prg7 is running")});

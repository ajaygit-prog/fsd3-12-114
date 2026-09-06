# HTTP Module
It is built in Node.js module which allow developers to create web server and web client without installing any external package .
one of the most important module in Node.js , originally designed for building scalable network application and web servers .

1. Create web servers
2. Handle client request 
3. Build REST APIs 
4. Non-Blocking I/O
5. Foundation of Express.js


## http status codes -> res.writeHead() , res.statusCode
- 200-> ok
- 201 -> created 
- 400 -> bad request 
- 401 -> unauthorized 
- 403 -> forbidden 
- 404 -> not found 
- 500 -> internal server error 


Server can send to the client 
1. html content -> prg2 , prg3
2. html file ->prg5
3. json data->prg4
4. plain file 
5. js file
6. any file to download
7. etc


## Type of information -> res.writeHead() , res.setHeader()

1. text/html -> for html file/contents
2. text/json , application/json -> for json data
3. text/css -> for css file/contents
4. application -> for file
5. text/plain -> for plain text file

### Note -: .gitignor -> this file contains the list of the files or folders that is not added to git , these files/folder will not push on git .
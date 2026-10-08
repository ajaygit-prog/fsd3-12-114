import express from 'express' ;

import path from 'path'
import { fileURLToPath } from 'node:url';

const app = express() ;

const urlPath = fileURLToPath(import.meta.url) ;
const rootFolder = path.dirname(urlPath) ; 


app.use(express.static(path.json.join(rootFolder,"pages"))) ;


app.use((req,res)=> {
    res.status(404).send("<h1>Page not Found</h1>") ;
}) ;




app.listen(4444, ()=> {
    console.log("server is running at port no :4444" )
})
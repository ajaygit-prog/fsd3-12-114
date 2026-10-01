import express from "express"

const app = express() ;


app.get("/" , (req,res) =>{
    res.send("hello express") ;
    //res.send(`<h1>Hello Express</h1>`) 

});



app.listen(4444,()=> {
    console.log("prg1 is runnig at 4444") ;
})
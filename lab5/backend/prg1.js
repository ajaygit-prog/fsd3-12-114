import express from "express"

const app = express() ;


app.get("/" , (req,res) =>{
    //res.send("hello express") ;
    //res.send(`<h1>Hello Express</h1>`) 

    res.send(
      `
        <h1>Hello Express</h1>
        <h2>i am responding from express framework</h2>
        <h3> the code is minimal and easy to run </h3>
        `,
    );

});



app.listen(4444,()=> {
    console.log("prg1 is runnig at 4444") ;
})
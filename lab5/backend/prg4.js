import express from "express";
import { products } from './data.js' ;

const app = express() ;


app.get('/api/products' ,(req,res) => {
    let sortedProducts = products.map(({name , image , price ,id})=> ({
        name,
        image,
        price,
        id,
    })) ;

    res.status(200).json({count:sortedProducts.length,data:sortedProducts})
});

//get details of particular product
app.get('/api/products/:pid',(req,res) =>{
    const {pid} = req.params ;
    const item = products.find((p)=>p.id === Number(pid)) 
    if(!item) {
        res.status(200).json({msg : `product with id ${pid} not found`}) ;
    }
    else {
        res.status(200).json({ msg: "product found  " ,data:item });
    }
})


app.use((req,res) => {
    res.status(404).send("<h1>Page not found </h1>")
})



app.listen(4444, () => {
  console.log("server is running at port no :4444");
});
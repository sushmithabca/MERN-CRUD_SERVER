
//fqLtQxd4LL6FmCaQ
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const infoRouter = require("./router");

//midleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//router 
app.use("/info",infoRouter);


app.listen(5000,()=>{
    console.log("Server started on 5000");
})

mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://mern:mern@cluster0.rqfinwt.mongodb.net/?retryWrites=true&w=majority",(err) => {
    if(!err)
    {
        console.log("DB connected successfully");
    }
})

//mern
/*mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost/tutorial",(err) => {
    if(!err)
    {
        console.log("DB connected successfully");
    }
})*/

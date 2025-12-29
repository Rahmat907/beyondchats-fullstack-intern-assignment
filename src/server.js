import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
app.listen(process.env.PORT || 7000,(req,res)=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})
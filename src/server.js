import "dotenv/config"
import app from "./app.js";
import connectDB from "./config/db.js";

connectDB().then(()=>{
app.listen(process.env.PORT || 7000,(req,res)=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})
}).catch((error)=>{
    console.log(error);
      
})





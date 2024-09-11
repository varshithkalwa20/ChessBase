import express from 'express';
import dotenv from "dotenv";
import connectToMongoDB from './dataBase/connectToMongodb.js';
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app=express();
const port=process.env.PORT || 5000;
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send('hii vaak');
// })

app.use("/auth",authRoutes)
app.listen(port,()=>{
    connectToMongoDB();
    console.log(`port is running at ${port}`)
})
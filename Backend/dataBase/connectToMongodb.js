import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config()

const connectToMongoDB=async()=>{
    try{
        await mongoose.connect(process.env.URI)
        console.log("connected to db")
    }
    catch(error){
        console.log("failed to connect",error.message)
    }
};
// "mongodb+srv://cognizant337:RpERMZTnd5XA7lB6@cluster0.2lqkz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
export default connectToMongoDB
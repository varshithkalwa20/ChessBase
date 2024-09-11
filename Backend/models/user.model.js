import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    email:{
        type: String,               
        required: [true, 'Email is required'],  
        unique: true,               
        lowercase: true,            
        trim: true,                 
        match: [                   
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address' 
        ]
    },
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
        minlength: 6,
    },
    gender:{
        type:String,
        required: true,
        enum:["male","female","straight"],
    },
    profilePic:{
        type:String,
        default:"",
    },

},{timestamps:true});
const User =mongoose.model("User", userSchema);
export default User;
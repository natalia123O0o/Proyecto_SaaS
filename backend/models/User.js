import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
            trim: true,
        },

        email:{
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        password: {
            type: String,
            required : true,
            trim: true,
            unique: true,
            lowercase: true,  
        },
        slug: {
            type: String,
            required:true,
            trim:true,
            unique:true,
            lowercase:true,
        },
        businessName: {
            type: String,
            default:'',
            trim:true,
        },
        businessDescription: {
            type: String,
            default:'',
            trim:true,
        },
    }
)
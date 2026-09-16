import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://yinaasdfd_db_user:L7L7h3ZYQtydnyEi@cluster0.5g9z6d3.mongodb.net/ProyectoSaaS")
    .then(() =>{
        console.log("Base de datos conectada 🛢️")
    })
}
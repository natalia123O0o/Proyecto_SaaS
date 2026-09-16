import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import http from 'http'
import { error } from 'console';
import { connect } from 'http2';
import { connectDB } from './config/db.js';


const PORT = process.env.PORT || 5000;
const app = express();


//MIDDLEWARES
app.use(cors());
app.use(express.json());
// CONEXION A BASE DE DATOS
connectDB();
//RUTAS


app.get("/",(req, res) =>{
    res.send("API WORKING")
});

const server = http.createServer(app);

server.on('error', (error) => {
    if(error.code === 'EADDRINUSE') {
        console.error(`El puerto ${PORT} ya esta en uso.`);
        process.exit(1);
    }

    throw error;
})

server.listen(PORT, () =>{
    console.log(`Servidor iniciado correctamente en http://localhost:${PORT}`)
})
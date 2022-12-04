import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
// import conectarDB from "./config/db.js";
import { comercial } from "./controllers/comercialController.js";

const app = express();
app.use(express.json());

// dotenv.config(); 

// conectarDB();

// Configurar CORS
// const whitelist = [process.env.FRONTEND_URL];

// const corsOptions = {
//     origin: function(origin, callback) {
//         if(whitelist.includes(origin)) {
//             callback(null, true);    
//         } else {
//             callback(new Error("Error de Cors"));
//         }
//     },
// };

// app.use(cors(corsOptions));

// Routing
app.use("/api/comercial", comercial);

const PORT = process.env.PORT || 4000;

const servidor = app.listen(PORT, () =>{
    console.log(`Servidor corriendo en ${PORT}`);
});
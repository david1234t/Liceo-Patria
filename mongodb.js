import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const db = mongoose.connect(process.env.MON_DBURI).then (()=>{
    console.log("😜La conexión fue realizada con éxtio ⚡✨🎉 a la bd:")
}).catch((error) => console.error("Problemas 😒🤮😵 al conectar con la base de datos de Mongodb 😰😭😨:"))

export default db;
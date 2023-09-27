import sumar from "./funciones.js"
import express from "express"
import cors from 'cors';
import  router  from "./rutas/rutas.js";
//import cookieParser from "cookie-parser";
const app = express ()
app.use= (cors())
app.use= (express.json())
//cookies
//app.use= (cookiesParser());
app.use= ('/ususarios',router);

app.listen(8000, () =>{
    console.log('Servidor corriendo 🛴👌🐱‍🏍 en http://localhost:8000/')
})

var nombre = "David Tequita";
console.log(nombre);
console.log(sumar( 9,20));

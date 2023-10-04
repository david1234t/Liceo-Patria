import express from "express"
import db from "../mongodb.js"
import  regevento  from "../controles/controles.js";

export const router = express.Router();
//Rutas para manejar los eventos
router.post('/regevento', regevento);


router.get('/',(req, res) => {
    res.send('Ejemplo de mi servidor de página Web')
 })
 router.get('/Inicio',(req, res) => {
    res.send('Inicio de mi servidor de página Web')
 })
  router.get('/Correo',(req, res) => {
    res.send('Correo de mi servidor de mi página Web')
 })

//router.get ('/shuser',showuser)
export default router;
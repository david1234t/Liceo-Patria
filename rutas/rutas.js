import express from "express"
export const router = express.Router();
import { delevento, regevento, shevento, shonevento, upevento }  from '../controles/controles.js'
import db from "../mongodb.js"



//Rutas para manejar los eventos
router.post('/regevento', regevento);
router.get('/mostrar', shevento);
router.get('/mostrarespecifico/:id', shonevento);
router.delete('/borrar/:id', delevento);
router.put('/actualizar/:id', upevento);


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
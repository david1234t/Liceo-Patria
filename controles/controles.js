import evento from "../modelos/eventos.js";
//Regitrar un evento deportivo
export const regevento = (req,res) => {
    const cevento = evento(req,body);
    cevento
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
 };
 export default regevento;
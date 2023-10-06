import evento from '../modelos/eventos.js';
//Regitrar un evento deportivo
export const regevento = (req, res) => {
    const equipos = evento(req.body);
    equipos
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
  };
//Mostrar un evento deportivo
  export const shevento = (req, res) => {
     evento
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

}
  export default regevento;
//Mostrar un evento en especifico
export const shonevento = (req,res) => {
  const {id} = req.params;
  evento
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
}
//Borrar un evento especifico
export const delevento = (req,res) => {
  const {id} = req.params;
  evento
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
}
//Actualizar un evento
export const upevento = (req,res) => {
  const {id} = req.params;
  const { fecha, equipo1, equipo2, marcador1, marcador2, tipodeevento} = req.body;
  evento
    .updateOne({_id: id}, {$set:  { fecha, equipo1, equipo2, marcador1, marcador2, tipodeevento}} )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
}

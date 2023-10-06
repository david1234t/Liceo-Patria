import mongoose from "mongoose";
const eventSchema = new mongoose.Schema(
    {
        fecha: {
            type: Date,
            require : true

        },
        equipo1: {
            type: String,
            require : true

        },
        equipo2: {
            type: String,
            require : true

        },
        marcador1: {
            type: Number,
            require : true

        },
        marcador2: {
            type: Number,
            require : true

        },
        tipodeevento: {
            type: String,
            require : true
        }
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

export const evento = mongoose.model('equipos', eventSchema)
export default evento;
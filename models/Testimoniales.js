import { Sequelize } from "sequelize"; // Importando librería Sequelize
import db from "../config/db.js"; // Importando conexion a la DB

/* Definiendo el modelo de la tabla Viajes, a traves de consultas SQL para poder mostrarlo en la vista */
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});

// Ya se exporta desde la funcion misma
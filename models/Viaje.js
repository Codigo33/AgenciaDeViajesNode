import { Sequelize } from "sequelize"; // Importando librería Sequelize
import db from "../config/db.js"; // Importando conexion a la DB

/* Definiendo el modelo de la tabla Viajes, a traves de consultas SQL para poder mostrarlo en la vista */
export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});


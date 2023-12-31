import Sequilize from 'sequelize';
import dotenv from "dotenv/config";

/* Creando conexion con la base de datos */
const db = new Sequilize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: 'process.env.PORT',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;

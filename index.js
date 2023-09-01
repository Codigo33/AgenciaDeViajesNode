/* En este archivo se realizan todas las configuraciones del proyecto */

/* Importando librerias y componentes */
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js"

// Ejecutando express
const app = express();

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .then( error => console.log(error) )

// Definir puerto
const puerto = process.env.PORT || 4000;

/* Capa de Middlewares */

app.set('view engine', 'pug'); // Habilitar PUG

app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear(); // Obtener el año actual
    res.locals.nombreSitio = "Agencia de Viajes";
    return next();
});

// Agregar body parser, para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

app.use(express.static('public')); // Creando ruta de acceso a carpeta public

app.use('/', router); // Escuchando las rutas

// Conectando el puerto de red
app.listen( puerto, () => {
    console.log(`El servidor está funcionando en el puerto ${puerto}`);
});
 /* Importando modelo de consulta (Query) hacia la tabla viajes en la Base de Datos */
import { Viaje } from "../models/Viaje.js"
import { Testimonial } from "../models/Testimoniales.js";


/*  rutas y vistas */

const paginaInicio = async (req, res) => {

    // Creando un arreglo de awaits hacia la Base de Datos
    const promiseDB = [];
    // con push, se inserta el parametro que le brindes
    promiseDB.push( Viaje.findAll({limit: 3}));
    promiseDB.push( Testimonial.findAll({limit: 3}));

    try {
        // Consultar 3 viajes en la Base de Datos
        const resultado = await Promise.all(promiseDB);
        res.render('Inicio', {
            pagina: "Inicio",
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });   
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: "Nosotros"
    });
}

const paginaViajes = async (req, res) => {
    // Query DB
    const viajes = await Viaje.findAll(); // Trae todos los datos de cada columna en la tabla

    console.log(viajes);

    res.render('viajes', {
        pagina: "Próximos Viajes",
        viajes,
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        // Creando await para traer la DB
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: "Testimoniales",
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
}

// 
const paginaDetalleViaje = async (req, res) => {
    
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug } });

        res.render('viaje', {
            pagina: "Información del viaje",
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
}
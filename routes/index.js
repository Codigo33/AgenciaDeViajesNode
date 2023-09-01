import express from "express"; // Importando librería Express
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaDetalleViaje,
    paginaTestimoniales 
} from "../controllers/paginasControllers.js";
import {
    guardarTestimonial
} from "../controllers/testimonialController.js";

/* Globales */
const router = express.Router(); // metodo Router de Express

/* Generando red de nodos que componen la vista */

router.get( '/', paginaInicio);

router.get( '/nosotros', paginaNosotros);

router.get( '/viajes', paginaViajes);

router.get( '/viajes/:slug', paginaDetalleViaje)

router.get( '/testimoniales', paginaTestimoniales);
router.post( '/testimoniales', guardarTestimonial);


export default router; // Exporta en la variable router todo el contenido obtenido de las rutas con consultas GET, POST, etc..
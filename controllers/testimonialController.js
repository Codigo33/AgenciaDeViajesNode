import { Testimonial } from "../models/Testimoniales.js"

const guardarTestimonial = async (req, res) => {
    // Validacion
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({mensaje: 'El nombre está vacio'});
    }

    if (correo.trim() === '') {
        errores.push({mensaje: 'El correo está vacio'});
    }

    if (mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje está vacio'});
    }

    if(errores.length > 0) {
        // Creando await para traer la DB
        const testimoniales = await Testimonial.findAll();
        // Mostrar una vista con los mensajes de error
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // Almacenar los datos en la Base de Datos, utilizando try, await, create() y redirect()
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}
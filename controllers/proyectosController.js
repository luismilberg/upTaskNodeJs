exports.proyectosHome = (req,res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = (req,res) => {
    // Enviar a la consola lo que el usuario escriba
    // console.log(req.body);

    // Validar que el input no esté vacio

    const {nombre} = req.body;

    let errores = [];

    if(!nombre){
        errores.push({'texto': 'Agregar un nombre al proyecto'});
    }

    // Si hay errores

    if(errores.length > 0){
        res.render('nuevoProyecto',{
            nombrePagina: 'Nuevo Proyecto',
            errores
        });
    } else {
        // Hacer la inserción en la base de datos
    }
}
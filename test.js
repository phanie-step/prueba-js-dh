const { leerTareas, filtrarTareasPorEstado, agregarTarea } = require('./app.js');
const { writeFileSync } = require('fs');

(function () {
    writeFileSync('./tareas.json', '[]');
    const tempData = [
        {
            titulo: 'tarea 1',
            status: 'pendiente'
        },
        {
            titulo: 'tarea 2',
            estatus: 'terminada'
        }
    ];
    agregarTarea(tempData[0]);
    agregarTarea(tempData[1]);
    const respuesta = leerTareas();
    if (!respuesta.length || respuesta.length !== 2) {
        console.error(`error: leyendo o escribiendo tareas, esperando: ${JSON.stringify(tempData)}, resultado: ${JSON.stringify(respuesta)}`);
        return;
    }

    const respuestaFiltrado1 = filtrarTareasPorEstado('pendiente');
    const respuestaFiltrado2 = filtrarTareasPorEstado('terminada');

    if (respuestaFiltrado1[0].nombre !== tempData[0].nombre) {
        console.error(`error obteniendo tareas filtradas por estado, esperando ${JSON.stringify([tempData[0]])}, resultado: ${JSON.stringify(respuestaFiltrado1)}`);
        return;
    }

    if (respuestaFiltrado2[0].nombre !== tempData[1].nombre) {
        console.error(`error obteniendo tareas filtradas por estado, esperando ${JSON.stringify([tempData[1]])}, resultado: ${JSON.stringify(respuestaFiltrado2)}`);
        return;
    }

    console.log('FELICIDADES!! Todos los tests corrieron exitosamente');
})();
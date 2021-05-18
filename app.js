/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
    const tareas = require('./tareas.json');
    return tareas;
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    const tareas = require('./tareas.json');
    tareas.push(tarea);
    const {writeFileSync} = require('fs');
    writeFileSync('./tareas.json',JSON.stringify(tareas));
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
    const tareas = require('./tareas.json');
    return tareas.filter(tarea => tarea.status === estado);
}
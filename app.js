/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs');
exports.leerTareas = function (){
    //path: 'tareas.json',
    const leer = fs.readFileSync('./tareas.json', 'utf8');
    return JSON.parse(leer);   
}

exports.agregarTarea = function (tarea) {
    const agregarTarea = JSON.stringify(tarea);
    return agregarTarea;
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
}
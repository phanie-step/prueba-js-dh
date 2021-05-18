/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/

exports.leerTareas = {
    path: 'tareas.json',
    leer: function(){
        const leerTareas = fs.readFileSync(this.path, 'utf8');
        return JSON.parse(leerTareas);
    }      
}

exports.agregarTarea = function (tarea) {

    
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
}
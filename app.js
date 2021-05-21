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

exports.agregarTarea = function (tempData) {
    const agregarTarea = [JSON.stringify(tempData[0]), JSON.stringify[1]];
    return agregarTarea;
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   const listado = leerTareas();
   for(let i=0; i<listado.length; i++){
       if(listado[i].status == estado){
           return 'titulo: ${listado[i].titulo} status: ${listado[i].status}';
       }
       else{
           return undefined;
       }
   }
}
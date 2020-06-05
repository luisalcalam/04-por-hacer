const fs = require('fs');

let listadoPoHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPoHacer);
    fs.writeFile('db/data.json', data, (e) => {
        if (e) return console.log(err);
    })
}

cargarDB = () => {
    try {
        listadoPoHacer = require('../db/data.json');
    } catch (error) {
        listadoPoHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPoHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getistado = () => {
    cargarDB();
    return listadoPoHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPoHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPoHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPoHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPoHacer.slice(index, 1);
        console.log('listado b', listadoPoHacer);
        guardarDB();
        return true;
    } else {
        return false
    }
}

module.exports = {
    crear,
    getistado,
    actualizar,
    borrar
}
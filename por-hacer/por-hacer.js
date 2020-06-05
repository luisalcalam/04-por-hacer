const fs = require('fs');

let listadoPoHacer = [];

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPoHacer.push(porHacer);

    return porHacer;
}

module.exports = {
    crear
}
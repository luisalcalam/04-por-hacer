const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estatus de la tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completada o pendiente la tarea'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}
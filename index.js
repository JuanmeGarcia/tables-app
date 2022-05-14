const { crearArchivo } = require('./helpers/multiply');
const argv = require('./config/yargs')
console.clear()

// const {base, limite = 10, listar} = argv

crearArchivo(argv)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err))

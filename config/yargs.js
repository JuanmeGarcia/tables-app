const { boolean, describe } = require('yargs')

const argv = require('yargs')
                .options({
                    'b':{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'Base de la tabla',
                    },
                    'l':{
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,     
                        describe: 'Listar tabla',
                    },
                    't':{
                        alias: 'limite',
                        type: 'number',
                        demandOption: false,
                        default: 10,
                        describe: 'Limite de la tabla',
                    }
                })
                .check((argv, options) => {
                    if(isNaN(argv.base)){
                        throw `El valor introducido no es un numero`
                    }
                    return true
                })
                .check((argv, options) => {
                    if(isNaN(argv.limite)){
                        throw `El valor introducido no es un numero`
                    }
                    return true
                })
                .argv

module.exports = argv

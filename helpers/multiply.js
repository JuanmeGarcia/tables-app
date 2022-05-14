const fs = require('fs');
const colors = require('colors')

const crearArchivo = async ({
    base, 
    listar, 
    limite = 10
}) => {
    try{
        if(!Number(base)){
            throw new Error(`El valor introducido no es un numero`)
        }
        console.log('========================='.green)
        console.log(`      ${colors.green('Tabla del')} ${colors.yellow(base)}        `)
        console.log('========================='.green)
        let salida = ''
        
        for (let index = 0; index <= limite; index++) {
            let operation = base * index
            salida += `${base} x ${index} = ${operation}\n`
        }

        listar && console.log(salida.america)

        const archivo = await fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`.trap
    }catch(err){
        throw new Error(err)
    }
} 

module.exports = {
    crearArchivo
}
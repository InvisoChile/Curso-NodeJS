const colors = require('colors');
const argv = require('yargs')

    .command('listar','Imprime en consola la tabla de multiplicar', {
        base : {
            demand:true,
            alias: 'b'
        },
        limit : {
            alias:'l',
            demand:true,
            default:10
        }
    })
    .argv;

let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar' : console.log('listar');
                    break;
    case 'crear' : console.log('crear');
                    break;
    default : console.log('comando no reconocido');
}

console.log('=========='.bgBlue);
console.log('Tabla multplicar'.green)
console.log(module);
 

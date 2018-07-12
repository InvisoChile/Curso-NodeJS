//requireds
const {crearArchivo} = require('./ multiplicar/multiplicar');

//Para llamar un require que está dentro 
//de la carpeta del proyecto, Se usa 
//const fs = require('./fs');

/*
let base =5;
let data='';
for(let i=1;i<=10; i++) {
    data+=`${base} * ${i} = ${base*i}\n`;
} 

fs.writeFile(`tablas/tabla-${base}.txt`,data,(err) => {
    if (err) throw err;

    console.log(`El archivo tabla-${base} ha sido creado.`);
});
*/

crearArchivo(base)
.then(archivo => console.log(`El archivo tabla-${base} ha sido creado.`));
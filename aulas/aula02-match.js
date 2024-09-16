// Usando a expressao na própria string

const { texto } = require('./base');
const regExp1 = /João|Maria/gi;

// Cada grupo é representado pelo numero
// (...( () ) )(...)(...)  $1 $2 $3 $4 $5

console.log(texto);
console.log(texto.match(regExp1));
console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>')); // Colca uma tag html em todo João ou Maria que for encontrado
console.log(
  texto.replace(/(João|Maria)/gi, function (input) {
    // Com uma função para executar algo mais complexo
    return ' ############## ' + input.toUpperCase() + ' ############## ';
  })
);

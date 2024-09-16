const { alfabeto } = require('./base');

// [abc] -> Conjunto [^] -> Negação
// [0-9]
// [min-maxQUALQUERCOISA]
// [^min-maxQUALQUERCOISA] -> Tudo menos isso
console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // Negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // Unicode
console.log(alfabeto.match(/\w+/g)); // Atalho para [a-zA-Z0-9_]
console.log(alfabeto.match(/\W/g)); // Atalho para negação de \w
console.log(alfabeto.match(/\d+/g)); // Digitos
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\s+/g)); // Espaços
console.log(alfabeto.match(/\S+/g));

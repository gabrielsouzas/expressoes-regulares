/**
 * As expressões regulares são usadas para:
 *
 * Extrair dados de variáveis;
 * Trocar dados de variáveis;
 * Validar dados de variáveis;
 */

const { texto } = require('./base');

// Expressões regulares são separadas pelas barras (//)
// g = global (encontra todas as ocorrencias)
// i = insensitive (checa palavras minusculas e maiusculas)
// () = grupo
// | = ou
const regExp1 = /João/gi;

console.log(regExp1.test(texto));

// Com a função exec() é possível extrair coisas

console.log(regExp1.exec(texto)[0]);

// Agrupamento com ou

const regExp2 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp2.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}

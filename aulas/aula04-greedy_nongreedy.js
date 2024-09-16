/**
 * Usado para encontrar valores dentro de caracteres
 */

const { html } = require('./base');

console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g)); // greedy - Entende que a últma tag que encontrar é o fechamento
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy - Entende que a cada tag encontrada é um fechamento

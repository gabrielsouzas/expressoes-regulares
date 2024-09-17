const { lookahead } = require('./base');

console.log(lookahead);

// Todas as linhas que terminan com "active" negando o in por causa do inactive
// console.log(lookahead.match(/.+[^in]active$/gim))

// Positive lookahead (frases que tem active) - Retorna a frase sem retornar o que buscou
// console.log(lookahead.match(/.+(?=[^in]active)/gim))

// Positive lookahead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim))

// Negative lookahead (frases que NÃO tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

// Negative lookahead (frases que NÃO tem inactive)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim))

// Positive lookbehind (Frases que começam com ONLINE)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))

// Negative lookbehind (Frases que NÃO começam com ONLINE)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))

const cpf = `
012.250.796-10
000.000.000-01
111.111.111-11
999.999.999-99
555.555.555-55
147.285.963-10
aaa.bbb.ccc-dd
`;

// Pega todos os CPFs que não sejam sequencias de numeros
console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));

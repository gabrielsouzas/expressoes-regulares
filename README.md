# Guia de Expressões Regulares

Bem-vindo ao repositório de **Guia de Expressões Regulares**! Este guia foi criado para ajudar você a entender e utilizar expressões regulares de maneira eficaz.

## Índice

- Introdução
- O que são Expressões Regulares?
- Sintaxe Básica
- Exemplos Práticos
- Recursos Adicionais
- Contribuições
- Licença

## Introdução

As expressões regulares são uma ferramenta poderosa para busca e manipulação de texto. Este guia tem como objetivo fornecer uma introdução clara e exemplos práticos para que você possa começar a usar expressões regulares em seus projetos.

## O que são Expressões Regulares?

Uma expressão regular, também conhecida como regex ou regexp, é uma sequência de caracteres que define um padrão de pesquisa. Elas são usadas para encontrar ou substituir padrões em strings.

## Sintaxe Básica

Aqui estão alguns elementos básicos da sintaxe de expressões regulares:

- `.`: Corresponde a qualquer caractere, exceto uma nova linha.
- `*`: Corresponde a zero ou mais ocorrências do caractere anterior.
- `+`: Corresponde a uma ou mais ocorrências do caractere anterior.
- `?`: Corresponde a zero ou uma ocorrência do caractere anterior.
- `\d`: Corresponde a qualquer dígito.
- `\w`: Corresponde a qualquer caractere alfanumérico.
- `[abc]`: Corresponde a qualquer um dos caracteres entre colchetes.
- `^`: Corresponde ao início da string.
- `$`: Corresponde ao final da string.

## Exemplos Práticos

Aqui estão alguns exemplos práticos de expressões regulares:

- **Validar um endereço de email**: `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`
- **Encontrar números de telefone**: `\(\d{2}\) \d{4,5}-\d{4}`
- **Substituir espaços múltiplos por um único espaço**: `\s+`

## Recursos Adicionais

Para mais informações e recursos sobre expressões regulares, confira os links abaixo:

- [MDN Web Docs - Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions)
- [Regex101 - Ferramenta Online para Testar Regex](https://regex101.com/)

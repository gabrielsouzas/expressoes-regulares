// Encontrando CPFs

const { cpfs, ips } = require('./base');

// const regExpCPF = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
const regExpCPF = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g;

console.log(cpfs.match(regExpCPF));

// Encontrando IPs

const regExpIP = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/g;

console.log(ips.match(regExpIP));

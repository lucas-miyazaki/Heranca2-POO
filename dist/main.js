"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotaFiscal_1 = require("./model/NotaFiscal");
const notaF1 = new NotaFiscal_1.NotaFiscal(`213578-952`);
notaF1.pessoaF.setNome(`Jubileu`);
notaF1.pessoaF.setCpf(`3124635241313-98`);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF1.getNumeroNotaFiscal()}`);
const notaF2v = new NotaFiscal_1.NotaFiscal(`532553-123`);
notaF2v.pessoaF.setNome(`Jubiléia`);
notaF2v.pessoaF.setCpf(`34234234324234-21`);
console.log(`Nome: ${notaF2v.pessoaF.getNome()}`);
console.log(`CPF: ${notaF2v.pessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF2v.getNumeroNotaFiscal()}`);
//# sourceMappingURL=main.js.map
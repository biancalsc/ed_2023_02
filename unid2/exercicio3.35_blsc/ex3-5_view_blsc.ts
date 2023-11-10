import { Sort_blsc, criarArquivoTxt_blsc, separarPalavras_blsc } from "./ex3-5_blsc";
const fs = require('fs')

let sort = new Sort_blsc<string>();

const palavras = separarPalavras_blsc("words.txt");
sort.bubble_blsc(palavras)

criarArquivoTxt_blsc("words_ord.txt", palavras);


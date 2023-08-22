import { somar, subtrair, despedir } from "./modelo";
import * as prompt_sync from "prompt-sync";
const prompt = prompt_sync();

let escolha: string = prompt("Digite sua opção: ");
let resultado: number;

switch (escolha) {
  case "somar":
    let a:number = parseInt(prompt("Digite o primeiro número:"));
    let b:number = parseInt(prompt("Digite o segundo número:"));
    resultado = somar(a,b);
    console.log("Resultado da soma é:", resultado);
    break;
  case "subtrair":
    let c:number = parseInt(prompt("Digite o primeiro número:"));
    let d:number = parseInt(prompt("Digite o segundo número:"));
    resultado = somar(c,d);
    console.log("Resultado da soma é:", resultado);
    break;
  case "despedir":
    console.log(despedir());
}
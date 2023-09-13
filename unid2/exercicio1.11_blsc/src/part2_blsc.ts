import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

let n1_blsc:number = parseInt(prompt("Digite o primeiro número:"));
let n2_blsc:number = parseInt(prompt("Digite o segundo número:"));

let resultado_blsc:string = ""; 

switch (true){
    case n1_blsc > n2_blsc:
        resultado_blsc = "O primeiro número é o maior.";
        break;

    case n1_blsc <= n2_blsc:
        resultado_blsc = "O primeiro número é menor ou igual ao segundo.";
        break;
}
console.log (resultado_blsc);

export {};
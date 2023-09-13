import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

let n1_blsc:number = parseInt(prompt("Digite o primeiro número:"));
let n2_blsc:number = parseInt(prompt("Digite o segundo número:"));

if (n1_blsc <= n2_blsc){
    console.log("O", n1_blsc," é menor ou igual ao", n2_blsc)
}
else {
    console.log("O", n1_blsc,"é o maior.")
}
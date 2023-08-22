const numero: number = 18; // questão a
const palavra: string = "Bianca"; //questão b
const logico = true; //questão c

class Pessoa{    //questão d
    nome:string;
    idade:number;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    print():void {
        console.log(`A pessoa se chama ${this.nome} e sua idade é ${this.idade} anos.`)
    }
}
const a = new Pessoa("Bianca", 18);
const b = new Pessoa("Vinícius", 13);
a.print();
b.print();

var array_de_numeros: number []; //questão e
array_de_numeros = [];
array_de_numeros.push(1);
array_de_numeros.push(2);
console.log(array_de_numeros);

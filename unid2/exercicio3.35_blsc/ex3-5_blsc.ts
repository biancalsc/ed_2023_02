const fs = require('fs')

class Sort_blsc<T>{
    bubble_blsc(v: T[]) {
        let is_ordered = false;
        let last_swap_position = v.length - 1;
        while (!is_ordered) {
            is_ordered = true;
            let j = 0;
            while (j < last_swap_position) {
                if (v[j] > v[j + 1]) {
                    let aux = v[j];
                    v[j] = v[j + 1];
                    v[j + 1] = aux;
                    is_ordered = false;
                }
                ++j
            }
            last_swap_position -= 1;
        }
    }
}

function separarPalavras_blsc(arquivoTxt: string): string[] {
    const conteudoArquivo = fs.readFileSync(arquivoTxt, "utf-8", { encoding: "utf-8" });
    const palavras = conteudoArquivo.split(" ");
    return palavras;
}

function criarArquivoTxt_blsc(arquivoTxt: string, conteudo: any): void {
    const conteudoString = conteudo.join('\n');
    fs.writeFileSync(arquivoTxt, conteudoString, { encoding: "utf-8" });
}

export {
    Sort_blsc,
    separarPalavras_blsc,
    criarArquivoTxt_blsc
}
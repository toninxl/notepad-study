const fs = require('fs');

const caminhoArquivo = "dados.json"


function readJson(file){
    const contentFile = JSON.parse(fs.readFileSync(file, "utf-8"));

    return contentFile;

}

const data = readJson(caminhoArquivo);

const resultado = data
    .filter((registro)=>registro.dados !== false)
    .map((registro)=>registro.dados?.logradouro ?? "Cep inválido");


console.log("Resultado :", resultado);



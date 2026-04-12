const readline = require('readline'); // 1. Importa

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validarCep(cep){
    let cepFinal = cep.replace(/\D/g, "")
    if(cepFinal.length==8){
        return cepFinal
    }
    return false
}


async function consultarCep(cep) {
    let cepFinal = validarCep(cep)
    console.log(cepFinal)
    if(cepFinal){
        try {
        const response = await fetch(`https://viacep.com.br/ws/${cepFinal}/json/`)
        if (!response.ok) {
      throw new Error('Erro na rede');
        }
        data = await response.json()
        if(data.erro == true){
            return false
        }

        return data
    } catch (error) {
        console.log("[catch]Erro ao buscar dados")
        
    }
    }
     return false
    
}

rl.question('Qual o seu CEP? ', async (resposta) => {
  const dados = await consultarCep(resposta);
  if(dados)
  console.log(dados)
  rl.close(); 
});


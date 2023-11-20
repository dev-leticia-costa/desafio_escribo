function minhaFuncao(numero) {
  let input = prompt("Digite um número inteiro positivo:");
  numero = parseInt(input);
  
  if (numero >= 0 && numero % 1 === 0) {
    return somatorio(numero);
  } else {
    alert("Por favor, digite um número inteiro positivo válido.");
    input = prompt("Digite um número inteiro positivo:");
    numero = parseInt(input);
    if (numero >= 0 && numero % 1 === 0) {
      return somatorio(numero);
    } else {
      alert("Por favor, digite um número inteiro positivo válido.");
    }
  }
}
//tratar erros: voltar pra o início do código para inserir novamente
function somatorio(numero) {
  let soma = 0;
  for (let i = 1; i < numero; i++) {
    console.log(`i: ${i}`);

    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
    console.log(`soma: ${soma}`);
  }
}
minhaFuncao();

function validaNumero(){
if (numero >= 0 && numero % 1 === 0) {
    return somatorio(numero);
  } else {
    alert("Por favor, digite um número inteiro positivo válido.");
    input = prompt("Digite um número inteiro positivo:");
    numero = parseInt(input);
    if (numero >= 0 && numero % 1 === 0) {
      return somatorio(numero);
    } else {
      alert("Por favor, digite um número inteiro positivo válido.");
    }
  }
}

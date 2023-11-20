const _maxInputs = 3

function somatorio(numero) {
  let soma = 0;
  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  return soma
}

function minhaFuncao(numero) {
  for (let i = 1; i <= _maxInputs; i++) {
    let input = prompt("Digite um número inteiro positivo:");
    numero = parseInt(input);
    
    if (numero >= 0 && numero % 1 === 0) {
        return somatorio(numero);
    } else {
        alert("Por favor, digite um número inteiro positivo válido.");
    }
  }
}

console.log(minhaFuncao());
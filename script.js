const _maxInputs = 3;

function somatorio(numero) {
  let soma = 0;
  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  return soma;
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

function menuInicial() {
  let escolha;
  do {
    escolha = prompt("Escolha uma opção:\n1. Iniciar o programa\n2. Encerrar o programa");

    switch (escolha) {
      case "1":
        let resultado = minhaFuncao();
        console.log("Resultado do somatório dos números divisíveis por 3 ou 5, menores que o número inserido: ", resultado);
        alert("Resultado do somatório dos números divisíveis por 3 ou 5, menores que o número inserido: "+ resultado);
        break;
      case "2":
        console.log("Programa encerrado.");
        break;
      default:
        alert("Por favor, escolha uma opção válida.");
    }
  } while (escolha !== "2");
}

menuInicial();
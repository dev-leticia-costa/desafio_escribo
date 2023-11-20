function somatorio(numero) {
  let soma = 0;
  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  console.log(`soma: ${soma}`);
}
function minhaFuncao(numero) {
  let input = prompt("Digite um número inteiro positivo:");
  numero = parseInt(input);

  while (true) {
    if (numero >= 0 && numero % 1 === 0) {
      return somatorio(numero);
    } else {
      alert("Por favor, digite um número inteiro positivo válido.");
      input = prompt("Digite um número inteiro positivo:");
      numero = parseInt(input);
    }
  }
}
minhaFuncao();

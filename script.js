function somatorio(numero) {
  // Código da função
  let input = prompt("Digite um número inteiro positivo:");
  let soma = 0;

  // Converter a entrada para um número inteiro - isNan não porque vai entrar como string
  numero = parseInt(input);
  if (numero >= 0 && numero % 1 === 0) {
    for (let i = 1; i < numero; i++) {
      console.log(`i: ${i}`);

      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }
    console.log(`soma: ${soma}`);
    //alert("número inteiro positivo válido.");
  } else {
    alert("Por favor, digite um número inteiro positivo válido.");
  }

  //    console.log(numero);
}
//minhaFuncao()
//tratar erros: voltar pra o início do código para inserir novamente
//criar outra função

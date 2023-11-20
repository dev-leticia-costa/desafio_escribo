//Implemente uma função que receba um número inteiro positivo 
//e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 
//que sejam inferiores ao número passado.
//Exemplos:
//Caso sua função receba o inteiro 10, ela deve retornar 23,
// resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.
//Caso sua função receba o inteiro 11, ela deve retornar 33, 
//resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.

//Implemente uma função que receba um número inteiro 
//positivo - OK
//e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 
//que sejam inferiores ao número passado.
//Exemplos:
//Caso sua função receba o inteiro 10, ela deve retornar 23,
// resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.
//Caso sua função receba o inteiro 11, ela deve retornar 33, 
//resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.

function minhaFuncao(numero) {
    // Código da função
        let input = prompt("Digite um número inteiro positivo:");

        // Converter a entrada para um número inteiro - isNan não porque vai entrar como string
        numero = parseInt(input);
        if (
           numero >= 0 && numero % 1 === 0){
            //percorrer enquanto o contador for menor que o número
              for (let i = 1; i < numero; i++) {

               console.log(`i: ${i}`);
                //testar se é divisível
                if (i % 3 === 0 || i % 5 === 0) {
                    console.log(`  i é divisível`);
                } else {
                    console.log(`  i não é divisível`);
                }
}
           //alert("número inteiro positivo válido.");

        }
        else {
            alert("Por favor, digite um número inteiro positivo válido.");
        }

//    console.log(numero);
}
//minhaFuncao()
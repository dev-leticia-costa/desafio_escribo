# Programa de Somatório em JavaScript

Este é um programa simples em JavaScript que solicita ao usuário um número inteiro positivo, calcula o somatório dos números divisíveis por 3 ou 5 até esse número e exibe o resultado.
Desafio proposto no processo seletivo da Escribo. 

## Instruções de Uso

1. **Abra o arquivo HTML no navegador:**
   - Abra o arquivo `index.html` no seu navegador.

2. **Escolha a opção no menu:**
   - Você será apresentado a um menu com duas opções, escolhendo entre os números 1 e 2 para selecioná-la:
      1) "Iniciar o programa": executa o programa, solicitando um número inteiro positivo, calculando o somatório e exibindo o resultado em um alert.
      2) "Encerrar o programa": encerra a execução.

## Funcionalidades do Código

O código é dividido em três principais funções: `minhaFuncao`, `somatorio` e `menuInicial`:

- `minhaFuncao` solicita ao usuário a inserção de um número inteiro positivo. Caso inválido, o usuário terá até 3 tentativas para inserir novamente.

- `somatorio` calcula o somatório dos números divisíveis por 3 ou 5 até o número fornecido.

- `menuInicial` exibe um menu com 2 opções, uma delas para o início do programa e outra para encerrá-lo.

## Limitações

- O programa permite até 3 tentativas para fornecer um número válido.
- Certifique-se de permitir pop-ups no navegador para visualizar os resultados em um `alert`.

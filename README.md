# Atividade: Consultando dados com `async/await`

## Objetivo

Nesta atividade, você vai implementar uma função assíncrona para consultar dados de produtos. O foco é entender como `async/await` organiza o código e como `try...catch` trata uma falha na operação.

## Situação-problema

Uma loja virtual precisa exibir o produto selecionado pelo cliente. A consulta ao servidor pode demorar e também pode falhar quando o código do produto não existe.

O código abaixo simula esse servidor. **Não altere a função `buscarProduto`.**

```javascript
function buscarProduto(codigo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const produtos = {
        101: { codigo: 101, nome: "Teclado", preco: 149.90 },
        102: { codigo: 102, nome: "Mouse", preco: 79.90 },
        103: { codigo: 103, nome: "Monitor", preco: 899.90 }
      };

      const produto = produtos[codigo];

      if (produto) {
        resolve(produto);
      } else {
        reject(new Error("Produto não encontrado."));
      }
    }, 1500);
  });
}
```

## Tarefa principal

Complete a função `exibirProduto(codigo)` seguindo estas regras:

1. A função deve ser declarada com `async`.
2. Antes da consulta, deve exibir `Consultando produto...`.
3. Deve usar `await` para aguardar o resultado de `buscarProduto(codigo)`.
4. Se o produto for encontrado, deve exibir seu nome e seu preço.
5. Se ocorrer um erro, deve exibir uma mensagem amigável ao usuário.
6. A mensagem `Consulta encerrada.` deve aparecer tanto em caso de sucesso quanto em caso de erro.

Use a estrutura abaixo como ponto de partida:

```javascript
async function exibirProduto(codigo) {
  // sua implementação
}

exibirProduto(102);
```

Para testar o tratamento de erro, troque a chamada para:

```javascript
exibirProduto(999);
```

## Resultado esperado

Com `exibirProduto(102)`, o console deverá apresentar informações equivalentes a:

```text
Consultando produto...
Produto: Mouse
Preço: R$ 79.90
Consulta encerrada.
```

Com `exibirProduto(999)`, deverá apresentar uma mensagem de erro e, depois, `Consulta encerrada.`.

## Análise do código

Depois de executar os dois testes, responda às perguntas a seguir com suas próprias palavras:

1. Por que `exibirProduto` precisa ser declarada com `async`?
2. O que o `await` aguarda nesse exemplo?
3. Em qual situação o bloco `catch` é executado?
4. Por que a mensagem final deve ficar no bloco `finally`?
5. O que aconteceria se o `await` fosse removido?
6. Qual é a vantagem de usar `async/await` em vez de encadear vários `.then()` neste caso?

## Desafio opcional

Altere a função para receber também uma função de exibição, mantendo a consulta separada da apresentação dos dados. Por exemplo:

```javascript
async function exibirProduto(codigo, formatarProduto) {
  // implemente a consulta e use formatarProduto(produto)
}
```

Crie uma função `formatarProduto` que retorne uma frase com o nome e o preço do produto.

## Entrega

Entregue o arquivo JavaScript com os testes dos códigos `102` e `999` e as respostas das seis questões de análise abaixo, editando este arquivo.

/*  Respostas das perguntas

1. A função precisa ser async porque ela usa o await para esperar
o resultado da busca do produto

2. O await espera a função buscarProduto retornar
o produto ou um erro

3. O catch é executado quando acontece um erro durante a execução
do bloco try,como quando o produto não é encontrado

4. A mensagem final fica no finally porque esse bloco sempre é
executado, mesmo quando acontece um erro

5. Sem o await, a variável ia receber a Promise em vez do resultado
da busca, então não poderia acessar diretamente os dados do produto

6. O async/await deixa o código mais fácil de entender,
principalmente para esperar o resultado e tratar os erros, evitando
vários .then() encadeados
*/
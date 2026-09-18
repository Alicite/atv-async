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


1-R: async function é muito similar, e tem quase a mesma sintaxe de uma declaração async function. A principal diferença entre uma expressão async function e uma declaração async function é o nome da função, que pode ser omitido em expressões async function para criar funções anônimas. 

2-R:A expressão await faz a execução de uma função async pausar, para esperar pelo retorno da Promise, e resume a execução da função async quando o valor da Promise é resolvido.
 Ele então retorna o valor final da Promise. Se esse valor não for uma Promise, ele é convertido para uma Promise resolvida.

3-R:O método catch() retorna uma Promise e lida apenas com casos rejeitados. Ele possui o mesmo comportamento de quando chamamos Promise.prototype.then(undefined, onRejected) (de fato, chamando obj.catch(onRejected) internamente é chamado obj.then(undefined, onRejected)).


4-R:A cláusula finally é executada após a excecução do bloco try e da(s) cláusula(s) catch porém antes das declarações seguintes ao try. Ela sempre é executada, independente se uma exceção for lançada ou capturada.


5-:A palavra-chave ´async´ é usada antes de uma função para indicar que ela retornará uma promessa. 

Em uma função async, você pode usar a palavra-chave ´await´ para pausar a execução e esperar que uma promise seja resolvida antes de continuar


6-R:A vantagem do async/await é que ele torna o código mais legível e fácil de entender, pois permite que escrevamos código assíncrono de forma sequencial, como se fosse síncrono. Isso facilita a leitura e a estruturação do código, tornando-o mais claro e menos propenso a erros.
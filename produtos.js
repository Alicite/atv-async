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

function formatarProduto(produto) {
  return `Produto: ${produto.nome} - Preço: R$ ${produto.preco.toFixed(2)}`;
}

async function exibirProduto(codigo, formatador) {
  console.log("Consultando produto...");

  try {
    const produto = await buscarProduto(codigo);
    console.log(formatador(produto));
  } catch (erro) {
    console.log(`Ops! Não foi possível encontrar o produto. (${erro.message})`);
  } finally {
    console.log("Consulta encerrada.");
  }
}

exibirProduto(102, formatarProduto);
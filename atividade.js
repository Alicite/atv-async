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
        reject(new Error("Produto nao encontrado."));
      }
    }, 1500);
  });
  }
async function exibirProduto(codigo) {
    console.log("Consultando produto...");

    try {
        const produto = await buscarProduto(codigo);

        console.log("Produto: " + produto.nome);
        console.log("Preco: R$ " + produto.preco.toFixed(2));
    } catch (erro) {
        console.log("Erro: " + erro.message);
    } finally {
        console.log("Consulta encerrada.");
    }
}

exibirProduto(999);



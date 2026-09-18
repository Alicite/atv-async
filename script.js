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

async function exibirProduto(codigo) {
    try {
        console.log("consultando produto")
        const produto = await buscarProduto(codigo)
        console.log(`produto: ${produto.nome}`)
        console.log(`preço: ${produto.preco}`)
    } catch (erro) {
        console.error(erro.message)
    } finally {
        console.log('consulta encerrada')
    }
}

exibirProduto(999);
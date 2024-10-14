// Array para armazenar os itens do carrinho
let carrinho = [];
let total = 0;

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(produto, preco) {
  // Adiciona o produto ao array do carrinho
  carrinho.push({ nome: produto, preco: preco });
  total += preco;

  // Atualiza o HTML do carrinho
  atualizarCarrinho();
}

// Função para remover um produto do carrinho
function removerDoCarrinho(index) {
  total -= carrinho[index].preco; // Subtrai o preço do item removido do total
  carrinho.splice(index, 1); // Remove o item do array
  atualizarCarrinho();
}

// Função para atualizar o carrinho no HTML
function atualizarCarrinho() {
  const listaCarrinho = document.getElementById("carrinho");
  listaCarrinho.innerHTML = ""; // Limpa o conteúdo atual

  // Percorre o array de produtos no carrinho e cria os elementos HTML
  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)} `;

    // Botão para remover o produto
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => removerDoCarrinho(index);

    li.appendChild(btnRemover);
    listaCarrinho.appendChild(li);
  });

  // Atualiza o valor total
  document.getElementById("total").textContent = total.toFixed(2);
}

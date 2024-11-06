let precoTotal;
limpar();

function adicionar() {
    //recuperar nome, quantidade e valor dos produtos
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;      

    //calcular o preço, nosso subtotal
    let preco = valorUnitario * quantidade;    

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
                            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
                        </section>`

    document.getElementById('quantidade').value = 1;

    //atualizar o valor total
    precoTotal = precoTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    
    campoTotal.textContent = `R$ ${precoTotal}`;
}

function limpar(){

    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = 1;    
    precoTotal = 0;
}
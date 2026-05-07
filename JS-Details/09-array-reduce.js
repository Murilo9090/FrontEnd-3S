const produtos = [
{
descricao : 'Camisa polo',
cor : 'Verde',
preco : 49.99,
perfil : 'M',
quantidade : 10,
promocao : false
},
{
descricao : 'Camisa polo',
cor : 'Amarela',
preco : 49.99,
perfil : 'F',
quantidade : 15,
promocao : true
},
{
descricao : 'Camisa polo',
cor : 'Azul',
preco : 49.99,
perfil : 'M',
quantidade : 100,
promocao : true
},
{
descricao : 'Camisa polo',
cor : 'Roxa',
preco : 49.99,
perfil : 'F',
quantidade : 5,
promocao : false
},

];

totalEstoque = produtos.reduce((total, produto) => {
    return total + produto.quantidade;
}, 0);
totalDinheiro = produtos.reduce((total, produto) => {
    return total + (produto.preco * produto.quantidade);
}, 0);
console.log("A quantidade total de produtos em estoque é de " + totalEstoque);
console.log("O valor total do estoque é de R$ " + totalDinheiro);
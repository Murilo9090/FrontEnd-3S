const estoque = [
    {
    descricao : 'Camisa Polo',
    Cor : 'Preta',
    Preco : '460',
    Perfil : 'M',
    quantidade : '400',
    promocao : true
    },
    {
    descricao : 'Camisa Polo',
    Cor : 'Vermelho',
    Preco : '500',
    Perfil : 'M',
    quantidade : '200', 
    promocao : true
    },
    {
    descricao : 'Camisa Polo',
    Cor : 'Azul',
    Preco : '560',
    Perfil : 'M',
    quantidade : '430'
    },
    {
    descricao : 'Camisa Polo',
    Cor : 'Branca',
    Preco : '300',
    Perfil : 'F',
    quantidade : '240'
    },

];

// const camisetasFemininas = estoque.filter(item => item.Perfil === 'F');

// console.log(camisitasFemininas);

const camisetasPromocao = estoque.filter(item => item.promocao === true);

console.log(camisetasPromocao);
import "./produto.css";
const Produto = ({nome, preco, descricao}) => {
    return (
       <> 
        <p>Nome: {nome}</p>
        <p>Preço: R$ {preco.toFixed(2)}</p>
        <p>Descrição: {descricao}</p>
    </>
    )
}
export default Produto;
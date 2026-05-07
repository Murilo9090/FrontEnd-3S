const Produto = ({nome, preco, descricao}) => {
    return (
        <p>
            Produto: {nome} <br />
            Preço: {preco.toFixed(2)} <br />
            descrição: {descricao}
        </p>
    )
}
export default Produto
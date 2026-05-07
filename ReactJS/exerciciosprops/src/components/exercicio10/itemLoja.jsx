
const ItemLoja = ({ nome, preco, categoria, estoque }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                margin: "10px",
                width: "250px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
            }}
        >
            <h2>{nome}</h2>

            <p>
                <strong>Preço:</strong> R$ {preco}
            </p>

            <p>
                <strong>Categoria:</strong> {categoria}
            </p>

            <p>
                <strong>Estoque:</strong> {estoque}
            </p>

            <p>
                <strong>Status:</strong>{" "}
                {estoque > 0
                    ? "Produto disponível"
                    : "Produto indisponível"}
            </p>
        </div>
    )
}

export default ItemLoja
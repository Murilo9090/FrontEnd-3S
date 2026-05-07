// Jogo.jsx

const Jogo = ({ nome, plataforma, preco, imagem }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "15px",
                width: "250px",
                margin: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                textAlign: "center"
            }}
        >
            <img
                src={imagem}
                alt={nome}
                style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px"
                }}
            />

            <h2>{nome}</h2>

            <p>
                <strong>Plataforma:</strong> {plataforma}
            </p>

            <p>
                <strong>Preço:</strong> R$ {preco}
            </p>
        </div>
    )
}

export default Jogo
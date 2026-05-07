const Filme = ({ titulo, ano, genero, nota }) => {
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
            <h2>{titulo}</h2>

            <p>
                <strong>Ano:</strong> {ano}
            </p>

            <p>
                <strong>Gênero:</strong> {genero}
            </p>

            <p>
                <strong>Nota:</strong> {nota}
            </p>
        </div>
    )
}

export default Filme
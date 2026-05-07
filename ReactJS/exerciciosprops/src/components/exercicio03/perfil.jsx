const Perfil = ({ nome, idade, profissao }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                width: "250px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                margin: "10px"
            }}
        >
            <h2>{nome}</h2>
            <p><strong>Idade:</strong> {idade}</p>
            <p><strong>Profissão:</strong> {profissao}</p>
        </div>
    )
}

export default Perfil   
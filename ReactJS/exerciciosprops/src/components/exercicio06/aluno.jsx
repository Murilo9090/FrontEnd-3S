const Aluno = ({ nome, curso, imagem }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                width: "250px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                margin: "10px"
            }}
        >
            <img
                src={imagem}
                alt={nome}
                style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover"
                }}
            />

            <h2>{nome}</h2>

            <p>
                <strong>Curso:</strong> {curso}
            </p>
        </div>
    )
}

export default Aluno
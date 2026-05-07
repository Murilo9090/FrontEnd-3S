const Botao = ({ texto, cor }) => {
    return (
        <button
            style={{
                backgroundColor: cor,
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer"
            }}
        >
            {texto}
        </button>
    )
}

export default Botao
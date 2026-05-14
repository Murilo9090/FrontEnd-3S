import "./filme.css";

const Filme = ({titulo, genero, ano, nota}) => {
    return (
        <>
            <h2>{titulo}</h2>
            <p>Gênero: {genero}</p>
            <p>Ano: {ano}</p>
            <p>Nota: {nota}</p>
        </>
    )
}
export default Filme;
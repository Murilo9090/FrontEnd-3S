import "./Aluno.css";

const Aluno = ({nome, imagem, curso}) => {
    return (
        <>
        <div className="Aluno">
            <img src={imagem} className="Foto" />
            <h2>{nome}</h2>
            <p>Curso: {curso}</p>
        </div>
        </>
    )
}
export default Aluno;
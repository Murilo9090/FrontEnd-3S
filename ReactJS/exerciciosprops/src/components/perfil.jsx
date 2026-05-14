import "./perfil.css";

const Perfil = ({nome, idade, profissao}) => {
    return (
        <>
        <article className="Card">
            <span>Nome: {nome}</span>
            <br />
            <span>Idade: {idade}</span>
            <br />
            <span>Profissao: {profissao}</span>
        </article>
        </>
    )
}
export default Perfil;
import "./Pessoa.css"

const Pessoa = ({nome, cidade, idade, foto}) => {
    return (
        <>
        <article className="Card">
            <span>Nome: {nome}</span>
            <br />
            <span>Idade: {idade}</span>
            <br />
            <span>Cidade: {cidade}</span>
            <br />
            <img src={foto}/>
        </article>
        </>
    )
}
export default Pessoa;
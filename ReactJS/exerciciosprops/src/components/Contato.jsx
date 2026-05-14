import "./Contato.css";

const Contato = ({nome, email, telefone}) => {
    return (
        <>
            <h3>{nome}</h3>
            <p>Email: {email}</p>
            <p>Telefone: {telefone}</p>
        </>
    )
}
export default Contato;
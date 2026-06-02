import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/Perfil">Perfil</Link>{" "}
        <Link to="/cadastro-produto">Cadastrar Produto</Link>{" "}
        <Link to="/listar-produto">Listar Produtos</Link>
      </nav>

      <h2>Bem vindo, {usuario}</h2>
    </header>
  );
};

export default Header;
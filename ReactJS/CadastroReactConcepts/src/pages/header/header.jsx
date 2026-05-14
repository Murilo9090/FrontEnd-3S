import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="cabecalho">
        <nav className="cabecalho-nav">
            <Link to="/" className="cabecalho-link">Home</Link> {" | "}
            <Link to="/quemsomos" className="cabecalho-link">Quem Somos</Link> {" | "}
            <Link to="/cadastrofrutas" className="cabecalho-link">Cadastro de Frutas</Link> {" | "}
            <Link to="/produtos" className="cabecalho-link">Produtos</Link>
        </nav>
    </header>
  );
}
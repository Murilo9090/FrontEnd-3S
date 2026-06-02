import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

function Home() {
  const { usuario } = useContext(UsuarioContext);

  return (
    <h1>Página Home {usuario}</h1>
  )
}

export default Home
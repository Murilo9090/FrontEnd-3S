import { useContext, useState } from 'react';
import { UsuarioContext } from '../../context/UsuarioContext';

const Perfil = () => {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const [novoUsuario, setNovoUsuario] = useState("");

  return (
    <div>
      <h2>Pagina de Perfil</h2>

      

      <input
        type="text"
        placeholder="Digite o nome do usuario"
        onChange={(e) => setNovoUsuario(e.target.value)}
      />

      <button
        onClick={() => {
          setUsuario(novoUsuario);
        }}
      >
        Alterar usuário
      </button>

      <p>Novo Usuario: <strong>{novoUsuario}</strong></p>
    </div>
  );
};

export default Perfil;
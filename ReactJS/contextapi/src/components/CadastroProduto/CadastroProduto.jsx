import { useContext, useState } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const CadastroProduto = () => {
  const { adicionarProduto } = useContext(ProdutoContext);

  const [nome, setNome] = useState("");

  const handleCadastrar = () => {
    if (!nome.trim()) return;

    adicionarProduto({ nome });

    setNome("");
  };

  return (
    <div>
      <h2>Cadastrar Produto</h2>

      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button onClick={handleCadastrar}>Cadastrar</button>
    </div>
  );
};

export default CadastroProduto;
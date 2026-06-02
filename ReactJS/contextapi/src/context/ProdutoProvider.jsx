import { useState } from "react";
import { ProdutoContext } from "./ProdutoContext";

export const ProdutoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (produto) => {
    setProdutos((prev) => [prev, {produto, id: Date.now() }]);
  };

  return (
    <ProdutoContext.Provider value={{ produtos, adicionarProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
};
import "./botao.css";
import { useState } from "react";

const Botao = ({ texto }) => {
  const [cor, setCor] = useState("green");
  const [i, setI] = useState(0);

  function corBotao() {
    if (i === 0) {
      setCor("red");
      setI(1);
    } else if (i === 1) {
      setCor("green");
      setI(2);
    } else {
      setCor("blue");
      setI(0);
    }
  }

  return (
    <button
      onClick={corBotao}
      style={{ backgroundColor: cor }}
    >
      {texto}
    </button>
  );
};
export default Botao;
import { useState } from "react";
import "./cadfruta.css"

function CadFruta() {

    //States, variaveis e funções

    //states do formulario
    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [arrFrutas, setArrFrutas] = useState([{
        id: 1,
        nome: "Mamão",
        quantidade: 10
    }, {
        id: 2,
        nome: "Abacate",
        quantidade: 5
    },
    {
        id: 3,
        nome: "Banana",
        quantidade: 2
    }
])
function Cadastrar(e) {
    e.preventDefault();
    alert("Função Cadastrar OK!")
    setArrFrutas([
        ...arrFrutas,
         { nome : fruta, quantidade : quantidade}
        ])

        limparFormulario()

        return false;
}

function limparFormulario(){
    setFruta("")
    setQuantidade(0)
}


    return (
        <section className="sessao-cadastro">
            <h1>Cadastro de Frutas</h1>
            <form action="" method="post" onSubmit={Cadastrar}>

            <fieldset className="sessao-cadastro">
                <input
                    placeholder="Nome da fruta"
                    type="text"
                    id="fruta"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                    />
                <br />
                <input
                    placeholder="Quantidade"
                    type="number"
                    id="quantidade"
                    className="cadastro__entrada"
                    onChange={(q) => 
                        setQuantidade(q.target.value)
                    }
                    />
                <button type="submit" className="cadastro__btn-cadastrar">Cadastrar</button>   
                <br />
                <label htmlFor="">{fruta}</label>
            </fieldset>
                    </form>



            <ul className="listagem">
                {
                    arrFrutas.map((f) => {
                        return (
                            <li key={f.id}>Fruta: {f.nome} | Quantidade:  {f.quantidade}</li>
                        )
                    })
                }
            </ul>
        </section>

    );
}

export default CadFruta;


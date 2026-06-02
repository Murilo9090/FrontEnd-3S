import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./CadastroFilme.css";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../services/services";

// import Swal from "sweetalert2"; // biblioteca de alertas APAGAR
import { Alerta } from "../../components/alerta/Alerta"; // Sweet Alert Personalizado

const CadastroFilme = () => {
  // states e variáveis
  const [valor, setValor] = useState("");
  const [idEditar, setIdEditar] = useState(0);

  const [editar, setEditar] = useState(false);
  const [listaFilmes, setListaFilmes] = useState([]);

  const [listaGeneros, setListaGeneros] = useState([
    {id: 1, nome: "Ação"},
    {id: 2, nome: "Comédia"},
    {id: 3, nome: "Terror"},
    {id: 4, nome: "Romance"},
  ]);

  // ciclo de vida e funções
  //
  // POST
  const cadastrarFilmes = async (e) => {
    e.preventDefault();

    // validação dos dados preenchidos
    if (valor.trim().length == 0) {
      Alerta({
        title: "Cadastro de Filmes",
        text: "Filme deve ser preenchido antes de cadastrar!",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    const objCadastro = {
      nome: valor,
    };

    try {
      // Cadastra na api, no endpoint do swagger
      const retornoAPI = await api.post("/Filme", objCadastro);

      if (retornoAPI.status == 201) {
        Alerta({
          title: "Cadastro de Filmes",
          text: `${objCadastro.nome} foi cadastrado!`,
          icon: "success",
          confirmButtonText: "Ok",
        });

        // limpar os campos
        limparFormulario();
        // chamar o getfilmes
        getFilmes();
      } else {
        Alerta({
          title: "Cadastro de Filmes",
          text: "Erro na chamada da API",
          icon: "error",
          confirmButtonText: "Ok",
        });
        // alert("Houve algum prolema ao cadastrar!");
      }

      // chamar o get!
    } catch (error) {
      Alerta({
        title: "Cadastro de Filmes",
        text: "Erro na chamada da API",
        icon: "error",
        confirmButtonText: "Ok",
      });
      // console.log(error);
    }
  }; //fim função cadastrarFilme

  // Reseta o formulário e esconde o botão
  const limparFormulario = () => {
    setValor("");
    setEditar(false); // reiniciar o editar
    setIdEditar(0); // zerar o idEditar
  };

  // mostrar os dados no formulário
  const preEditar = (item) => {
    //  jogar os dados no formuário
    // setIdEditar(item.idfilme);
    setEditar(true);
    setIdEditar(item.id);
    setValor(item.nome);
    console.log(item);
  };

  const editarFilmes = async (e) => {
    e.preventDefault();
    // alert(`Agora sim: Gênero: ${valor} | id: ${idEditar}`);
    // validar o formulário
    const objEditar = {
      nome: valor,
    };
    // chamar a api e salvar os dados
    try {
      const retornoAPI = await api.put(`/Filme/${idEditar}`, objEditar);

      if (retornoAPI.status == 200) {
        Alerta({
          title: "Cadastro de Filmes",
          text: "Filme editado com sucesso!",
          icon: "success",
        });
        limparFormulario();
        getFilmes();
      } else {
        Alerta({
          title: "Cadastro de Filmes",
          text: "Algum problema aconteceu ao editar",
          icon: "error",
        });
      }
    } catch (error) {
      Alerta({
        title: "Cadastro de Filmes",
        text: "Erro ao chamar a API",
        icon: "error",
      });
      // console.log(error);
    }
  }; //fim função editarFilmes

  const excluirFilme = async (item) => {
    // Validação do formulário
    const result = await Alerta({
      title: "Cadastro de Filmes",
      text: `Deseja realmente apagar ${item.nome} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar Exclusão",
      cancelButtonText: "Cancelar",

      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    // Clicou no botão cancelar
    if (!result.isConfirmed) {
      return false;
    }

    try {
      const retornoAPI = await api.delete(`/Filme/${item.id}`);
      // const retornoAPI = await api.delete(`/Filme/${item.idFilme}`)//pra rodar com api local

      if (retornoAPI.status == 204 || retornoAPI.status == 200) {
        console.log(retornoAPI);
        Alerta({
        title: "Cadastro de Filmes",
        text: "Apagado com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      });
        getFilmes(); //atualiza a lista
      }
    } catch (error) {}
  };

  useEffect(() => {
    // chamar os dados da api
    getFilmes();
   
  }, []);

  const getFilmes = async () => {
    try {
      const retornoAPI = await api.get("/Filme"); //chama a api
      const dados = retornoAPI.data; //extrai os dados retornados
      setListaFilmes(dados); //guarda os dados no state (já exibe na lista)
    } catch (error) {
      Alerta({
        title: "Cadastro de Filmes",
        text: "Erro ao retornar os dados",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  // O jsx
  return (
    <>
      <Header />
      <main>
        {/* Formulário de cadastrar / editar */}
        <Cadastro
          tituloCadastro="Cadastro de Filmes"
          // visibilidade="none"
          placeholder="filme"
          valor={valor}
          // função pra cancelar a pré edição
          cancelarEdicao={limparFormulario}
          setValor={setValor}
          funcCadastro={editar ? editarFilmes : cadastrarFilmes}
          btnEditar={editar}
          listaGeneros={listaGeneros}
        />

        <Lista
          tituloLista="Lista de Filmes"
          // visibilidade="none"
          //Chama o método para validar:
          lista={listaFilmes}
          //Identifica o tipo de lista:
          tipoLista="filme"
          funcExcluir={excluirFilme}
          funcEditar={preEditar}
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroFilme;

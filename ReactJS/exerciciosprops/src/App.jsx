import "./App.css";
import Produto from "./components/Produto";
import Saudacao from "./components/saudacao";
import Perfil from "./components/perfil";
import Botao from "./components/botao";
import Filme from "./components/filme";
import Aluno from "./components/Aluno";
import Ana from "./assets/Captura de tela 2026-04-16 101804.png";
import Card from "./components/Card";
import Contato from "./components/Contato";
import Jogo from "./components/Jogo";
import zelda from "./assets/zelda.jpg";
import ItemLoja from "./components/ItemLoja";
import Jose from "./assets/pessoa01.png";
import Pedro from "./assets/pessoa02.png";
import Joao from "./assets/pessoa03.jpeg";
import Pessoa from "./components/Pessoa";
const App = () => {
  const pessoas = [
   {
    id: 1,
    nome: "Lucas Souza",
    idade: 17,
    profissao: "Estudante"
   },
   {
    id: 2,
    nome: "Barney Latorre",
    idade: 16,
    profissao: "Estudante"
   },
   {
    id: 3,
    nome: "Murilo Pereira",
    idade: 20,
    profissao: "Estudante"
   }
  ];
  const desafio = [
    {
    id: 1,
     nome: "José",
     idade: 21,
     cidade: "São Paulo",
     foto: Jose
  },
{
    id: 2,
     nome: "Pedro",
     idade: 21,
     cidade: "São Paulo",
     foto: Pedro
},
{
    id: 3,
     nome: "João",
     idade: 21,
     cidade: "São Paulo",
     foto: Joao
}]
  return (
  <>
    <h1>Exercicio 1</h1>
    <br />
    <Saudacao nome="Barney" />
    <Saudacao nome="yenraB" />
    <Saudacao nome="neyBar" />
    <br />
    <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
    <br />
    <h1>Exercicio 2</h1>
    <br />
    <Produto nome="Notebook" preco={1500.00} descricao="Notebook com 16GB de RAM e 512GB de armazenamento." />
    <br />
    <Produto nome="Smartphone" preco={800.00} descricao="Smartphone com tela de 6.5 polegadas e câmera de 48MP." />
    <br />
    <Produto nome="Fone de Ouvido" preco={200.00} descricao="Fone de ouvido sem fio com cancelamento de ruído." />
    <br />
    <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
    <br />
    <h1>Exercicio 3</h1>
    <br />
    {pessoas.map((p) => (
      <Perfil key={p.id}
        nome ={p.nome}
        idade = {p.idade}
        profissao = {p.profissao}
      />
    ))}
    <br />
    <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
    <br />
    <h1>Exercicio 4</h1>
    <br />
   <Botao texto="Cadastrar"/>
    <br />
    <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
    <br />
    <h1>Exercicio 5</h1>
    <br />
   <Filme titulo="O Poderoso Chefão" diretor="Francis Ford Coppola" ano={1972} genero="Crime, Drama" nota={0} />
   <br />
   <Filme titulo="A Origem" diretor="Christopher Nolan" ano={2010} genero="Ação, Ficção Científica" nota={10} />
   <br />
   <Filme titulo="Pulp Fiction" diretor="Quentin Tarantino" ano={1994} genero="Crime, Drama" nota={10} />
       <br />
    <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
    <br />
    <h1>Exercicio 6</h1>
    <br />
   <Aluno nome="Ana" imagem={Ana} curso="Engenharia de Software"/>
    <br />
    <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
    <br />
    <h1>Exercicio 7 e 8</h1>
    <br />
   <Card>
    <Contato nome="João" email="joao@email.com" telefone="(11) 99999-9999" />
    <Contato nome="Maria" email="maria@email.com" telefone="(11) 88888-8888" />
    <Contato nome="Carlos" email="carlos@email.com" telefone="(11) 77777-7777" />
    <Contato nome="Ana" email="ana@email.com" telefone="(11) 66666-6666" />
    <Contato nome="Pedro" email="pedro@email.com" telefone="(11) 55555-5555" />
   </Card> 
    <br />
    <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
    <br />
    <h1>Exercicio 9</h1>
    <br />
    <Jogo nome="The Legend of Zelda: Breath of the Wild" plataforma="Nintendo Switch" preco={299.99} imagem={zelda} />
   <Jogo nome="Memphis the game" plataforma="PlayStation 4" preco={199.99} imagem={Ana} />
    <br />
    <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
    <br />
    <h1>Exercicio 10</h1>
    <br />
   <ItemLoja nome="Camiseta" preco={49.99} categoria="Roupas" estoque={10} />
   <ItemLoja nome="Tênis" preco={199.99} categoria="Calçados" estoque={0} />
    <br />
    <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
    <br />
    <h1>Desafio Extra</h1>
    <br />
    {desafio.map((d) => (
      <Pessoa key={d.id}
        nome = {d.nome}
        idade = {d.idade}
        cidade = {d.cidade}
        foto = {d.foto}
      />
    ))}
  </>)
  }
  export default App;
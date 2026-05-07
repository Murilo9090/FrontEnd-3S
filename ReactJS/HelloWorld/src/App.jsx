import './App.css'
import Paragrafo from './components/paragrafo/paragrafo.jsx'
import Title from './components/Title/title.jsx'
function App() {
  return (<>
    <Title nome="Barney" sobrenome="Latorre" texto="Bem Vindo, sou Título" />
    <Title texto  ="Eu sou outro Título"/>
    <Paragrafo textoParagrafo="Este é o meu parágrafo"/>
  </>);
}

export default App

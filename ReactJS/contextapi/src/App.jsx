import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Perfil from './components/Perfil/Perfil'
import Home from "./components/Home/Home";
import Header from './components/Header/Header'
import CadastroProduto from './components/CadastroProduto/CadastroProduto'
import ListarProduto from './components/ListarProduto/ListarProduto'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Perfil' element={<Perfil/>} />
        <Route path='/cadastro-produto' element={<CadastroProduto/>} />
        <Route path='/listar-produto' element={<ListarProduto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
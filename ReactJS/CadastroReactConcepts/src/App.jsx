import './App.css'
import Header from './components/Header/header'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import CadastroFrutasPage from './pages/cadastrofrutaspages/cadastrofrutaspages'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quemsomos" element={<QuemSomosPage />} />
          <Route path="/cadastrofrutas" element={<CadastroFrutasPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
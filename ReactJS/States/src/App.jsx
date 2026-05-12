import { useState } from "react"
import "./App.css"
import Contador from "./components/contador/contador" 
import CadFruta from "./components/cadfruta/cadfruta"
import CicloDeVida from "./components/ciclodevida/ciclodevida"

function App(){
const [mostrar, setMostrar] = useState(true)

function fuiAbandonado(){
  setNome("Input foi abandonado :(")
}
  return(
    // <>
    // <h1>{nome} Page</h1>
    // <button onClick={trocarTexto}>Mudar Texto</button>
    // <button onClick={() => {
    //   return setNome("Yahoo")
    // }}>Mudar Texto</button>
    // <br />
    // <input type="text" onBlur={fuiAbandonado} onChange={(e) => setNome(e.target.value)}/>
    // <Contador />
    // <br /><br />
    // <p>Lorem ipsum <strong>{nome}</strong> dolor sit amet</p>
    // </>
    // <CadFruta />
    <>
    <button onClick={() => { setMostrar(!mostrar) }}>Mostrar/Esconder</button>
    {mostrar && <CicloDeVida />}
    </>
  )
}

export default App;
import { useEffect, useState } from "react"
import "./ciclodevida.css"

export default function CicloDeVida(){

    const [contador, setContador] = useState(0)
    useEffect(() => {
        //quando o componente é montado
        console.log("Componente MONTADO");
        return () => {
            //quando o componente é desmontado
            console.log("Componente DESMONTADO");
        }
    }, [contador])


    return(
        <>
        <h1>Contador: {contador}</h1>

        <button onClick={() => {
            setContador(contador + 1)
        }}>Contar</button>
        </>
    )
}

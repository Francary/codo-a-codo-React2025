import { useState, useEffect } from "react"

const Clase05Clicker = () => {
const [inputValue, setInputValue] = useState("");
const [clic, setClic] = useState('');

useEffect(() => {
document.title = `Curso React -> ${clic}`;
}, [clic])

  const manejarEnvio = (evento) => {
      evento.preventDefault();
      setClic(inputValue)
        }
return(
    <>
    <form onSubmit={manejarEnvio}>
         <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ingresa Titulo"
          />

    <button onClick={() => setClic(clic)}>Enviar</button>
    </form>
    </>
)
}

export {Clase05Clicker}

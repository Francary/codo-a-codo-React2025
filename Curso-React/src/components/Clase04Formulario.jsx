import { useState } from 'react';

const Clase04Formulario = () => {
  const [nombre, setNombre] = useState('');
  const manejarEnvio = (evento) => {
      evento.preventDefault();
      alert(`Formulario enviado por: ${nombre}`);
  }
  return (
      <form onSubmit={manejarEnvio}>
          <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
          />
          <button type="submit">Enviar</button>
      </form>
  );
}

export {
    Clase04Formulario
}
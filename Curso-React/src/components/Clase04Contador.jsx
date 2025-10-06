import { useState } from 'react';

const Clase04Contador= () => {
    const [contador, setContador] = useState(0);

    return (
        <>
        <div >
            <p>Valor del contador: {contador}</p>
            <button style={{backgroundColor:'#0B5C46', marginRight:'10px'}} onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button style={{backgroundColor:'#c1121f', marginRight:'10px'}} onClick={() => setContador(contador - 1)}>Disminuir</button>
            <button style={{backgroundColor:'#03045e', marginRight:'10px'}} onClick={() => setContador(0)}>Reiciniar</button>
            
        </div>
        
        </>
    );
}
export  {
    Clase04Contador
};